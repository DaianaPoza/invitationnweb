import { useEffect, useRef, useState } from 'react'
import TarjetaProducto from '../../componentes/tarjetas/TarjetaProducto'
import { categoriasProyectos, productosDemo } from '../../data/datosProductos'
import './Productos.css'

const CATEGORIA_INICIAL = 'Bodas'

function obtenerCantidadInicial() {
  if (typeof window === 'undefined') {
    return 8
  }

  return window.matchMedia('(max-width: 760px)').matches ? 4 : 8
}

function Productos() {
  const filtros = categoriasProyectos.map((categoria) => categoria.nombre)
  const categoriaInicial = filtros.includes(CATEGORIA_INICIAL) ? CATEGORIA_INICIAL : filtros[0]
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categoriaInicial)
  const [cantidadInicial, setCantidadInicial] = useState(obtenerCantidadInicial)
  const [mostrarTodos, setMostrarTodos] = useState(false)
  const filtrosRef = useRef(null)

  const productosFiltrados = productosDemo.filter((producto) => producto.categoria === categoriaSeleccionada)
  const productosVisibles = mostrarTodos ? productosFiltrados : productosFiltrados.slice(0, cantidadInicial)
  const hayMasProyectos = productosFiltrados.length > cantidadInicial

  const seleccionarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria)
    setMostrarTodos(false)
  }

  useEffect(() => {
    const actualizarCantidadInicial = () => {
      setCantidadInicial(obtenerCantidadInicial())
    }

    actualizarCantidadInicial()
    window.addEventListener('resize', actualizarCantidadInicial)

    return () => window.removeEventListener('resize', actualizarCantidadInicial)
  }, [])

  useEffect(() => {
    const botonActivo = filtrosRef.current?.querySelector('[aria-pressed="true"]')

    if (botonActivo) {
      botonActivo.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [categoriaSeleccionada])

  return (
    <section className="products-page-view reveal-section is-visible" id="proyectos">
      <div className="products-page-heading">
        <h1>Proyectos</h1>
        <p>Explorá nuestro trabajo organizado por categoría.</p>
      </div>

      <div className="project-filter-wrap">
        <div className="project-filter-bar" aria-label="Filtrar proyectos por categoría" ref={filtrosRef}>
          {filtros.map((filtro) => (
            <button
              className={`project-filter-button ${categoriaSeleccionada === filtro ? 'is-active' : ''}`}
              type="button"
              aria-pressed={categoriaSeleccionada === filtro}
              key={filtro}
              onClick={() => seleccionarCategoria(filtro)}
            >
              {filtro}
            </button>
          ))}
        </div>
      </div>

      <div className="project-gallery" aria-live="polite">
        {productosVisibles.map((producto) => (
          <TarjetaProducto producto={producto} key={producto.hrefCaso} />
        ))}
      </div>

      {hayMasProyectos && (
        <div className="project-more-actions">
          <button
            className="project-more-button"
            type="button"
            aria-expanded={mostrarTodos}
            onClick={() => setMostrarTodos((actual) => !actual)}
          >
            {mostrarTodos ? 'Ver menos proyectos' : 'Ver más proyectos'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Productos
