import {
  ArrowRight,
  CalendarDays,
  FolderOpen,
  Image as ImageIcon,
  MessageCircle,
  Monitor,
  Pencil,
  Rocket,
  Type,
} from 'lucide-react'
import TarjetaContacto from '../../componentes/contacto/TarjetaContacto'
import { canalesContacto } from '../../data/datosContacto'
import './Contacto.css'

const pasosContacto = [
  {
    titulo: 'Nos escribís',
    texto: 'Contanos tu idea o lo que tenés en mente.',
    icono: MessageCircle,
  },
  {
    titulo: 'Analizamos tu proyecto',
    texto: 'Te asesoramos y definimos la mejor propuesta.',
    icono: Pencil,
  },
  {
    titulo: 'Diseñamos tu página',
    texto: 'Creamos un diseño único, alineado a tu objetivo.',
    icono: Monitor,
  },
  {
    titulo: 'Lanzamos tu proyecto',
    texto: 'Te entregamos tu sitio listo para compartir y disfrutar.',
    icono: Rocket,
  },
]

const datosIniciales = [
  {
    titulo: 'Fecha del evento o lanzamiento',
    texto: 'Si ya la tenés definida.',
    icono: CalendarDays,
  },
  {
    titulo: 'Referencias o inspiración',
    texto: 'Imágenes o sitios que te gusten.',
    icono: ImageIcon,
  },
  {
    titulo: 'Textos e información',
    texto: 'Lo que querés comunicar.',
    icono: Type,
  },
  {
    titulo: 'Fotos o logo (opcional)',
    texto: 'Si ya contás con material.',
    icono: FolderOpen,
  },
]

function Contacto() {
  const whatsappPrincipal = canalesContacto.find((canal) => canal.tipo === 'whatsapp')

  return (
    <section className="contact-page" id="contacto">
        <div className="contact-hero">
          <div className="contact-hero-copy">
            <p className="eyebrow">Contacto</p>
            <h1>Hablemos de tu proyecto</h1>
            <span className="title-line" />
            <p>
              Contanos qué necesitás y te recomendamos la mejor opción para tu evento, empresa o proyecto
              digital.
            </p>
          </div>
        </div>

        <section className="contact-process" aria-labelledby="contact-process-title">
          <div className="contact-section-heading">
            <p className="eyebrow">Así trabajamos</p>
            <h2 id="contact-process-title">Un proceso simple y personalizado</h2>
            <span className="title-line" />
          </div>

          <div className="process-steps">
            {pasosContacto.map((paso, index) => {
              const Icono = paso.icono

              return (
                <article className="process-step" key={paso.titulo}>
                  <span className="step-number">{index + 1}</span>
                  <span className="step-icon" aria-hidden="true">
                    <Icono strokeWidth={1.55} />
                  </span>
                  <h3>{paso.titulo}</h3>
                  <p>{paso.texto}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="contact-needs" aria-labelledby="contact-needs-title">
          <div className="needs-copy">
            <p className="eyebrow">Para empezar</p>
            <h2 id="contact-needs-title">¿Qué necesitamos?</h2>
            <span className="title-line" />
            <p>Estos datos nos ayudan a entender tu idea y enviarte una propuesta a medida.</p>
          </div>

          <div className="needs-list">
            {datosIniciales.map((dato) => {
              const Icono = dato.icono
              return (
                <article key={dato.titulo}>
                  <span aria-hidden="true">
                    <Icono strokeWidth={1.6} />
                  </span>
                  <h3>{dato.titulo}</h3>
                  <p>{dato.texto}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="contact-channels" aria-labelledby="contact-channels-title">
          <div className="contact-section-heading">
            <p className="eyebrow">Elegí tu canal preferido</p>
            <h2 id="contact-channels-title">Estamos para ayudarte</h2>
            <span className="title-line" />
          </div>

          <div className="contact-grid">
            {canalesContacto.map((canal) => (
              <TarjetaContacto canal={canal} key={canal.tipo} />
            ))}
          </div>
        </section>

        <div className="contact-final-cta">
          <div>
            <h2>
              Cada proyecto es único.
              <span>Creamos experiencias digitales que cuentan historias.</span>
            </h2>
          </div>
          <a href={whatsappPrincipal.href} rel="noreferrer" target="_blank">
            Pedir presupuesto <ArrowRight strokeWidth={1.7} />
          </a>
        </div>
    </section>
  )
}

export default Contacto
