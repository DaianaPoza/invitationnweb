import { ArrowUp, Mail, MessageCircle } from 'lucide-react'
import { canalesContacto } from '../../data/datosContacto'

function IconoInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4.4" y="4.4" width="15.2" height="15.2" rx="4.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.7" cy="7.3" r="1.1" fill="currentColor" />
    </svg>
  )
}

const iconosContacto = {
  instagram: IconoInstagram,
  whatsapp: MessageCircle,
  email: Mail,
}

const ordenCanales = ['instagram', 'whatsapp', 'email']

function BotonesFlotantes() {
  const canales = ordenCanales
    .map((tipo) => canalesContacto.find((canal) => canal.tipo === tipo))
    .filter(Boolean)

  return (
    <aside className="floating-actions" aria-label="Accesos rápidos">
      <nav className="floating-socials" aria-label="Redes sociales y contacto">
        {canales.map((canal) => {
          const Icono = iconosContacto[canal.tipo]

          return (
            <a
              aria-label={canal.titulo}
              className="floating-action floating-action--social"
              href={canal.href}
              key={canal.tipo}
              rel="noreferrer"
              target={canal.tipo === 'email' ? undefined : '_blank'}
            >
              <Icono aria-hidden="true" strokeWidth={1.8} />
            </a>
          )
        })}
      </nav>

      <a className="floating-action floating-action--top" href="#inicio" aria-label="Volver al inicio">
        <ArrowUp aria-hidden="true" strokeWidth={1.9} />
      </a>
    </aside>
  )
}

export default BotonesFlotantes
