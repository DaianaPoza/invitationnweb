import { MessageCircle, Monitor, Pencil, Rocket } from 'lucide-react'

const pasosTrabajo = [
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

function ComoTrabajamos() {
  return (
    <section
      className="contact-process work-process reveal-section"
      id="como-trabajamos"
      aria-labelledby="work-process-title"
    >
      <div className="contact-section-heading">
        <p className="eyebrow">Así trabajamos</p>
  
      </div>

      <div className="process-steps">
        {pasosTrabajo.map((paso, index) => {
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
  )
}

export default ComoTrabajamos
