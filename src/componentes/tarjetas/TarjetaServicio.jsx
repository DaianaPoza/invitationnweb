import IconoServicio from './IconoServicio'

function TarjetaServicio({ servicio }) {
  const rutaImagen = `${import.meta.env.BASE_URL}${servicio.imageSrc.replace(/^\/+/, '')}`

  return (
    <a className="service-card" href={servicio.href}>
      <IconoServicio tipo={servicio.icon} />
      <h3>{servicio.title}</h3>
      <p>{servicio.text}</p>
      <div className={`service-device-stage ${servicio.device} ${servicio.image}`}>
        {servicio.device === 'phone' ? (
          <div className="service-phone-mockup">
            <span className="service-phone-notch" aria-hidden="true" />
            <img
              className="service-device-media"
              src={rutaImagen}
              alt={`Vista móvil de ${servicio.title}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <div className="service-laptop-mockup">
            <div className="service-laptop-screen">
              <img
                className="service-device-media"
                src={rutaImagen}
                alt={`Vista de escritorio de ${servicio.title}`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="service-laptop-base" aria-hidden="true" />
          </div>
        )}
      </div>
    </a>
  )
}

export default TarjetaServicio
