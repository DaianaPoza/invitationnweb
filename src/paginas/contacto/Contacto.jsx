import { ArrowRight } from 'lucide-react'
import IconoMarcaContacto from '../../componentes/contacto/IconoMarcaContacto'
import { canalesContacto } from '../../data/datosContacto'
import './Contacto.css'

function Contacto() {
  return (
    <section className="contact-page reveal-section" id="contacto">
      <div className="contact-shell">
        <div className="contact-section-heading contact-main-heading">
          <h1>Contacto</h1>
          
          <span>Contanos tu idea y diseñemos la mejor solución para tu proyecto</span>
        </div>

        <div className="contact-link-list" aria-label="Canales de contacto">
          {canalesContacto.map((canal) => (
            <a
              className={`contact-link-card contact-link-card-${canal.tipo}`}
              href={canal.href}
              key={canal.tipo}
              rel="noreferrer"
              target={canal.tipo === 'email' ? undefined : '_blank'}
            >
              <span className="contact-link-icon" aria-hidden="true">
                <IconoMarcaContacto tipo={canal.tipo} />
              </span>
              <span className="contact-link-copy">
                <strong>{canal.titulo}</strong>
                <span>{canal.dato}</span>
              </span>
              <ArrowRight className="contact-link-arrow" strokeWidth={1.7} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="contact-legal">© 2026 Invitationnweb · Todos los derechos reservados</p>
      </div>
    </section>
  )
}

export default Contacto
