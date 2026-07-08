import IconoMarcaContacto from '../contacto/IconoMarcaContacto'
import { canalesContacto } from '../../data/datosContacto'

function FooterContacto() {
  const canalesFooter = ['instagram', 'email', 'whatsapp']
    .map((tipo) => canalesContacto.find((canal) => canal.tipo === tipo))
    .filter(Boolean)

  return (
    <footer className="home-footer" id="contacto-rapido">
      <div className="home-footer__content" aria-label="Contacto rápido">
        <div className="footer-main-row">
          <div className="footer-socials" aria-label="Canales de contacto">
            {canalesFooter.map((canal) => (
              <a
                aria-label={canal.titulo}
                className={`footer-social-link footer-social-link--${canal.tipo}`}
                href={canal.href}
                key={canal.tipo}
                rel="noreferrer"
                target={canal.tipo === 'email' ? undefined : '_blank'}
              >
                <IconoMarcaContacto compacto tipo={canal.tipo} />
              </a>
            ))}
          </div>
        </div>

        <p className="home-footer__legal">© 2026 Invitationnweb · Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default FooterContacto
