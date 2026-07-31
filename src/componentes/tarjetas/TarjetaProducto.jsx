import { rutaAsset } from '../../utils/rutasAssets'
import { Eye } from 'lucide-react'

function TarjetaProducto({ producto }) {
  const tieneImagen = Boolean(producto.imagen)
  const rutaImagen = tieneImagen ? rutaAsset(producto.imagen) : ''

  return (
    <a className="product-card" href={producto.hrefDemo} target="_blank" rel="noreferrer">
      <div className={`product-preview ${producto.variante} ${tieneImagen ? 'with-image' : ''}`}>
        {tieneImagen ? (
          <>
            <img className="product-preview-image" src={rutaImagen} alt={`Portada de ${producto.titulo}`} />
            <span className="product-view-overlay" aria-hidden="true">
              <span className="product-view-icon">
                <Eye strokeWidth={1.8} />
              </span>
              <span>Ver proyecto</span>
            </span>
          </>
        ) : (
          <>
            <div className="browser-bar mini">
              <span />
              <span />
              <span />
            </div>
            <span className="product-badge">{producto.categoria}</span>
            <span className="play-button" aria-hidden="true">
              ▶
            </span>
          </>
        )}
      </div>

      <div className="product-card-body">
        <div>
          <h2>{producto.titulo}</h2>
          <p>{producto.fecha || producto.categoria}</p>
        </div>
      </div>
    </a>
  )
}

export default TarjetaProducto
