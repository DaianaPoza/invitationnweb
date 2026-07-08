function TarjetaProducto({ producto }) {
  const tieneImagen = Boolean(producto.imagen)
  const rutaImagen = tieneImagen
    ? `${import.meta.env.BASE_URL}${producto.imagen.replace(/^\/+/, '')}`
    : ''

  return (
    <article className="product-card">
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
        <p>{producto.descripcion}</p>
        <div className="product-actions">
          <a className="demo-link" href={producto.hrefDemo} target="_blank" rel="noreferrer">
            Ver demo <span>→</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default TarjetaProducto
