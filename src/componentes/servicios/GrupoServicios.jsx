import TarjetaDetalleServicio from '../tarjetas/TarjetaDetalleServicio'
import IconoServicio from '../tarjetas/IconoServicio'

function GrupoServicios({ id, titulo, icono, servicios, textoBoton, hrefBoton }) {
  return (
    <section className="service-group-block" id={id}>
      <div className="service-group-heading">
        <IconoServicio tipo={icono} />
        <h2>{titulo}</h2>
        {textoBoton && (
          <a className="group-link" href={hrefBoton}>
            {textoBoton} <span>→</span>
          </a>
        )}
      </div>

      <div className="service-detail-grid">
        {servicios.map((servicio) => (
          <TarjetaDetalleServicio servicio={servicio} key={servicio.title} />
        ))}
      </div>
    </section>
  )
}

export default GrupoServicios
