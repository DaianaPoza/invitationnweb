import { useMemo, useState } from 'react'
import FooterContacto from '../../componentes/footer/FooterContacto'
import TarjetaProducto from '../../componentes/tarjetas/TarjetaProducto'
import { filtrosProductos, productosDemo } from '../../data/datosProductos'
import './Productos.css'

function Productos() {
  const [filtroActivo, setFiltroActivo] = useState('Todos')

  const productosFiltrados = useMemo(() => {
    if (filtroActivo === 'Todos') {
      return productosDemo
    }

    return productosDemo.filter((producto) => producto.categoria === filtroActivo)
  }, [filtroActivo])

  return (
    <>
      <section className="products-page-view" id="proyectos">
        <div className="products-page-heading">
          <h1>Proyectos que muestran posibilidades</h1>
          <p>Una selección de sitios, invitaciones y micrositios diseñados para distintas historias y objetivos.</p>
        </div>

        <div className="products-filter" aria-label="Filtros de productos">
          {filtrosProductos.map((filtro) => (
            <button
              className={filtro === filtroActivo ? 'active' : ''}
              key={filtro}
              type="button"
              onClick={() => setFiltroActivo(filtro)}
            >
              {filtro}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {productosFiltrados.map((producto) => (
            <TarjetaProducto producto={producto} key={producto.hrefCaso} />
          ))}
        </div>

      </section>

      <FooterContacto />
    </>
  )
}

export default Productos
