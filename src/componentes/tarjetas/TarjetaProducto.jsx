import { rutaAsset } from '../../utils/rutasAssets'

function TarjetaProducto({ producto }) {
  const tieneImagen = Boolean(producto.imagen)
  const rutaImagen = tieneImagen ? rutaAsset(producto.imagen) : ''

  return (
    <a className="product-card" href={producto.hrefDemo} target="_blank" rel="noreferrer">
      <div className={`product-preview ${producto.variante} ${tieneImagen ? 'with-image' : ''}`}>
        {tieneImagen ? (
          <img className="product-preview-image" src={rutaImagen} alt={`Portada de ${producto.titulo}`} />
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
        <div className="product-card-content">
          <h2>{producto.titulo}</h2>
          <p className="product-card-category">{producto.fecha || producto.categoria}</p>
          <p className="product-card-description">{producto.descripcion}</p>
          <span className="product-card-action">Ver proyecto</span>
        </div>
      </div>
    </a>
  )
}

export default TarjetaProducto
