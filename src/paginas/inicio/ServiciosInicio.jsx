import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Gift,
  Mail,
  MapPin,
  Monitor,
  Music,
  Share2,
  Sparkles,
  Users,
} from 'lucide-react'
import { rutaAsset } from '../../utils/rutasAssets'

const serviciosInformativos = [
  {
    numero: '01',
    titulo: 'Tarjetas',
    destacado: 'digitales',
    texto:
      'Invitaciones web personalizadas para bodas, cumpleaños, aniversarios, celebraciones especiales y presentaciones profesionales.',
    imagen: '/imagenes/servicios/nueva-seccion/tarjetas-digitales.jpg',
    alt: 'Celular con una invitación digital elegante sobre una mesa clara',
    tono: 'terracotta',
    detalles: [
      { texto: 'Cuenta regresiva', icono: Clock3 },
      { texto: 'Música', icono: Music },
      { texto: 'Confirmación online', icono: Mail },
      { texto: 'Ubicación con Google Maps', icono: MapPin },
      { texto: 'Lista de regalos / alias', icono: Gift },
      { texto: 'Celebraciones especiales', icono: Sparkles },
    ],
  },
  {
    numero: '02',
    titulo: 'Landing pages',
    destacado: 'para eventos',
    texto:
      'Sitios para congresos, jornadas, lanzamientos y eventos corporativos, con toda la información organizada en un solo lugar.',
    imagen: '/imagenes/servicios/nueva-seccion/landing-pages-eventos.jpg',
    imagenMobile: '/imagenes/servicios/nueva-seccion/landing-pages-eventos-mobile.jpg',
    alt: 'Auditorio preparado para un congreso corporativo',
    tono: 'rose',
    detalles: [
      { texto: 'Agenda del evento', icono: CalendarDays },
      { texto: 'Speakers / disertantes', icono: Users },
      { texto: 'Inscripción y confirmación', icono: CheckCircle2 },
      { texto: 'Preguntas frecuentes', icono: Sparkles },
      { texto: 'Ubicación y accesos', icono: MapPin },
    ],
  },
  {
    numero: '03',
    titulo: 'Sitios web',
    destacado: 'profesionales',
    texto:
      'Páginas web modernas para profesionales, emprendimientos y empresas que buscan una presencia digital clara y confiable.',
    imagen: '/imagenes/servicios/nueva-seccion/sitios-web-profesionales.jpg',
    alt: 'Laptop con una página web profesional empresarial',
    tono: 'sage',
    detalles: [
      { texto: 'Diseño responsive', icono: Monitor },
      { texto: 'Presentación profesional', icono: Users },
      { texto: 'Información organizada', icono: CheckCircle2 },
      { texto: 'Formularios de contacto', icono: Mail },
      { texto: 'Integración con redes', icono: Share2 },
    ],
  },
]

function ServiciosInicio() {
  return (
    <section className="services-preview reveal-section" id="servicios">
      <div className="services-intro">
        <p className="eyebrow">Servicios</p>

        <p>Diseñamos páginas web personalizadas para eventos, profesionales y empresas.</p>
      </div>

      <div className="services-showcase">
        {serviciosInformativos.map((servicio, indice) => (
          <article
            className={`service-feature service-feature--${servicio.tono}`}
            key={servicio.numero}
          >
            <div className="service-feature__media">
              <picture>
                {servicio.imagenMobile && (
                  <source media="(max-width: 760px)" srcSet={rutaAsset(servicio.imagenMobile)} />
                )}
                <img
                  src={rutaAsset(servicio.imagen)}
                  alt={servicio.alt}
                  loading={indice === 0 ? 'eager' : 'lazy'}
                />
              </picture>
            </div>

            <div className="service-feature__content">
              <span className="service-number">{servicio.numero}</span>
              <span className="service-divider" aria-hidden="true" />
              <h3>
                {servicio.titulo}
                <span>{servicio.destacado}</span>
              </h3>
              <p>{servicio.texto}</p>

              <ul className="service-list" aria-label={`Incluye ${servicio.titulo}`}>
                {servicio.detalles.map((detalle) => {
                  const Icono = detalle.icono

                  return (
                    <li key={detalle.texto}>
                      <Icono aria-hidden="true" strokeWidth={1.5} />
                      <span>{detalle.texto}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServiciosInicio
