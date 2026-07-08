import { ArrowRight } from 'lucide-react'
import IconoMarcaContacto from './IconoMarcaContacto'
import './TarjetaContacto.css'

function TarjetaContacto({ canal }) {
  return (
    <a
      className={`contact-card contact-card-${canal.tipo}`}
      href={canal.href}
      rel="noreferrer"
      target="_blank"
    >
      <span className="contact-card-icon" aria-hidden="true">
        <IconoMarcaContacto tipo={canal.tipo} />
      </span>
      <span className="contact-card-kicker">{canal.etiqueta}</span>
      <h2>{canal.titulo}</h2>
      <p>{canal.texto}</p>
      <strong>
        {canal.boton} <ArrowRight strokeWidth={1.8} />
      </strong>
    </a>
  )
}

export default TarjetaContacto
