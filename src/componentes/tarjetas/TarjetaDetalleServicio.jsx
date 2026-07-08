import IconoServicio from './IconoServicio'

function TarjetaDetalleServicio({ servicio }) {
  const rutaImagen = servicio.imageSrc
    ? `${import.meta.env.BASE_URL}${servicio.imageSrc.replace(/^\/+/, '')}`
    : null

  return (
    <article className="service-detail-card">
      <div className="service-detail-copy">
        <IconoServicio tipo={servicio.icon} />
        <h3>{servicio.title}</h3>
        <p>{servicio.text}</p>
        <a aria-label={`Ver más sobre ${servicio.title}`} href={servicio.href}>
          →
        </a>
      </div>
      <div className={`service-detail-image ${servicio.image}`}>
        {rutaImagen && (
          <img
            src={rutaImagen}
            alt={servicio.title}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
    </article>
  )
}

export default TarjetaDetalleServicio
