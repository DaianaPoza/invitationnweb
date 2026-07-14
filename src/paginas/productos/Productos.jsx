import { useState } from 'react'
import TarjetaProducto from '../../componentes/tarjetas/TarjetaProducto'
import { categoriasProyectos, productosDemo } from '../../data/datosProductos'
import './Productos.css'

function Productos() {
  const [categoriaAbierta, setCategoriaAbierta] = useState('')

  const desplazarCategoria = (categoria, direccion = 1) => {
    const carrusel = document.querySelector(`[data-project-carousel="${categoria}"]`)

    if (carrusel) {
      const tarjetas = Array.from(carrusel.querySelectorAll('.product-card'))

      if (tarjetas.length === 0) {
        return
      }

      const indiceActual = tarjetas.reduce((indiceMasCercano, tarjeta, indice) => {
        const distanciaActual = Math.abs(tarjeta.offsetLeft - carrusel.scrollLeft)
        const distanciaMasCercana = Math.abs(tarjetas[indiceMasCercano].offsetLeft - carrusel.scrollLeft)

        return distanciaActual < distanciaMasCercana ? indice : indiceMasCercano
      }, 0)

      const siguienteIndice = (indiceActual + direccion + tarjetas.length) % tarjetas.length

      carrusel.scrollTo({ left: tarjetas[siguienteIndice].offsetLeft, behavior: 'smooth' })
    }
  }

  const alternarCategoria = (categoria) => {
    setCategoriaAbierta((actual) => (actual === categoria ? '' : categoria))
  }

  return (
    <section className="products-page-view reveal-section" id="proyectos">
      <div className="products-page-heading">
        <h1>Proyectos</h1>
        <p>Explorá nuestro trabajo organizado por categoría.</p>
      </div>

      <div className="project-categories" aria-label="Categorías de proyectos">
        {categoriasProyectos.map((categoria) => {
          const productos = productosDemo.filter((producto) => producto.categoria === categoria.nombre)
          const Icono = categoria.icono
          const estaAbierta = categoriaAbierta === categoria.nombre

          return (
            <section className={`project-category ${estaAbierta ? 'is-open' : ''}`} key={categoria.nombre}>
              <button
                className="project-category-header"
                type="button"
                aria-expanded={estaAbierta}
                aria-controls={`project-panel-${categoria.nombre.replace(/\s+/g, '-')}`}
                onClick={() => alternarCategoria(categoria.nombre)}
              >
                <div className="project-category-title">
                  <Icono aria-hidden="true" strokeWidth={1.6} />
                  <h2>{categoria.nombre}</h2>
                </div>
                <span className="project-accordion-icon" aria-hidden="true">
                  {estaAbierta ? '⌃' : '⌄'}
                </span>
              </button>

              <div
                className="project-category-panel"
                hidden={!estaAbierta}
                id={`project-panel-${categoria.nombre.replace(/\s+/g, '-')}`}
              >
                <div className="project-carousel-wrap">
                  <button
                    className="project-carousel-button project-carousel-button--prev"
                    type="button"
                    aria-label={`Ver proyectos anteriores de ${categoria.nombre}`}
                    onClick={() => desplazarCategoria(categoria.nombre, -1)}
                  >
                    <span>←</span>
                  </button>

                  <div className="project-carousel" data-project-carousel={categoria.nombre}>
                    {productos.map((producto) => (
                      <TarjetaProducto producto={producto} key={producto.hrefCaso} />
                    ))}
                  </div>

                  <button
                    className="project-carousel-button project-carousel-button--next"
                    type="button"
                    aria-label={`Ver más proyectos de ${categoria.nombre}`}
                    onClick={() => desplazarCategoria(categoria.nombre)}
                  >
                    <span>→</span>
                  </button>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </section>
  )
}

export default Productos
