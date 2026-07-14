function TarjetaProducto({ producto }) {
  const tieneImagen = Boolean(producto.imagen)
  const rutaImagen = tieneImagen
    ? `${import.meta.env.BASE_URL}${producto.imagen.replace(/^\/+/, '')}`
    : ''

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
        <h2>{producto.titulo}</h2>
        <span className="project-card-arrow" aria-hidden="true">
          →
        </span>
      </div>
    </a>
  )
}

export default TarjetaProducto
