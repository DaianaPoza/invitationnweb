import { serviciosInicio } from '../../data/datosInicio'
import TarjetaServicio from '../../componentes/tarjetas/TarjetaServicio'

function ServiciosInicio() {
  return (
    <section className="services-preview" id="servicios">
      <div className="services-intro">
        <p className="eyebrow">Servicios</p>
        <h2>Soluciones digitales para cada ocasión</h2>
        <span className="title-line small" />
        <p>
          Sitios web, landing pages e invitaciones digitales interactivas para todo tipo de eventos
          y marcas.
        </p>
        <a href="#servicios">
          Ver todos los servicios <span>→</span>
        </a>
      </div>

      <div className="services-grid">
        {serviciosInicio.map((servicio) => (
          <TarjetaServicio servicio={servicio} key={servicio.title} />
        ))}
      </div>
    </section>
  )
}

export default ServiciosInicio
