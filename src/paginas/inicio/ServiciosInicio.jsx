import { CalendarDays, Mail, Monitor } from 'lucide-react'

const serviciosInformativos = [
  {
    numero: '01',
    titulo: 'Invitaciones digitales',
    texto: 'Invitaciones web personalizadas para bodas, cumpleaños, aniversarios y celebraciones especiales.',
    icono: Mail,
    fondo: 'service-card--invitaciones',
  },
  {
    numero: '02',
    titulo: 'Sitios web profesionales',
    texto: 'Páginas web modernas para profesionales, emprendimientos y empresas que buscan una presencia digital clara y confiable.',
    icono: Monitor,
    fondo: 'service-card--profesionales',
  },
  {
    numero: '03',
    titulo: 'Landing pages para eventos',
    texto: 'Sitios para congresos, jornadas, lanzamientos y eventos corporativos, con toda la información organizada en un solo lugar.',
    icono: CalendarDays,
    fondo: 'service-card--eventos',
  },
]

function ServiciosInicio() {
  return (
    <section className="services-preview" id="servicios">
      <div className="services-intro">
        <p className="eyebrow">Servicios</p>

        <p>Diseñamos experiencias web personalizadas para eventos, profesionales y empresas.</p>
      </div>

      <div className="services-grid">
        {serviciosInformativos.map((servicio) => {
          const Icono = servicio.icono

          return (
            <article className={`service-card ${servicio.fondo}`} key={servicio.numero}>
              <div className="service-card-top">
                <span className="service-number">{servicio.numero}</span>
                <Icono className="service-card-icon" aria-hidden="true" strokeWidth={1.45} />
              </div>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.texto}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServiciosInicio
