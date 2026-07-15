import {
  beneficiosInvitaciones,
  categoriasInvitaciones,
  funcionesInvitaciones,
  procesoInvitaciones,
} from '../../data/datosPaginasServicio'
import IconoMarcaContacto from '../../componentes/contacto/IconoMarcaContacto'
import IconoServicio from '../../componentes/tarjetas/IconoServicio'
import ItemFuncion from '../../componentes/servicios/ItemFuncion'
import { canalesContacto } from '../../data/datosContacto'
import { rutaAsset } from '../../utils/rutasAssets'
import { ArrowLeft } from 'lucide-react'
import './Invitaciones.css'

function Invitaciones() {
  const canalesFooter = ['instagram', 'email', 'whatsapp']
    .map((tipo) => canalesContacto.find((canal) => canal.tipo === tipo))
    .filter(Boolean)

  return (
    <>
      <section className="service-branch-page invitations-page reveal-section" id="invitaciones">
        <div className="branch-hero">
          <div className="branch-copy">
            <a className="service-back-link" href="#servicios">
              <ArrowLeft aria-hidden="true" size={20} strokeWidth={2.5} />
              <span>Volver a servicios</span>
            </a>
            <p className="eyebrow">Eventos sociales</p>
            <h1>Invitaciones digitales que se viven como una página web</h1>
            <span className="title-line" />
            <p>
              Bodas, 15 años, baby showers y cumpleaños infantiles con diseño personalizado, música,
              mapas, RSVP, galería y cuenta regresiva.
            </p>

            <div className="branch-tabs" aria-label="Tipos de invitaciones">
              {categoriasInvitaciones.map((categoria) => (
                <a href="#proyectos" key={categoria.titulo}>
                  <IconoServicio tipo={categoria.icono} />
                  <span>{categoria.titulo}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="invitation-preview">
            <img
              className="invitation-image invitation-image-wide"
              src={rutaAsset('/imagenes/invitacion-mayra-desktop.png')}
              alt="Vista de escritorio de una invitación digital de 15 años"
            />
            <img
              className="invitation-image invitation-image-phone"
              src={rutaAsset('/imagenes/invitacion-mayra-mobile.jpeg')}
              alt="Vista móvil de una invitación digital de 15 años"
            />
          </div>
        </div>

        <div className="function-strip">
          {funcionesInvitaciones.map((item) => (
            <ItemFuncion item={item} key={item.titulo} />
          ))}
        </div>

        <div className="process-section">
          <div>
            <h2>Un proceso simple y personalizado</h2>
            <span className="title-line small" />
          </div>
          <div className="process-list">
            {procesoInvitaciones.map((item, index) => (
              <article className="process-item" key={item.titulo}>
                <span>{index + 1}</span>
                <ItemFuncion item={item} />
              </article>
            ))}
          </div>
          <div className="branch-cta dark">
            <h2>Solicitá tu invitación digital</h2>
            <p>Creamos una experiencia única para tu evento.</p>
            <a className="btn btn-gold" href="#contacto">
              Empezar ahora <span>→</span>
            </a>
          </div>
        </div>

        <div className="benefits-strip">
          {beneficiosInvitaciones.map((item) => (
            <ItemFuncion item={item} key={item.titulo} />
          ))}
        </div>
      </section>

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
    </>
  )
}

export default Invitaciones
