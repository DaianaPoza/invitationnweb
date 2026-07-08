import {
  etiquetasWebProfesional,
  funcionesWebProfesional,
  tiposWebProfesional,
} from '../../data/datosPaginasServicio'
import IconoMarcaContacto from '../../componentes/contacto/IconoMarcaContacto'
import IconoServicio from '../../componentes/tarjetas/IconoServicio'
import ItemFuncion from '../../componentes/servicios/ItemFuncion'
import { canalesContacto } from '../../data/datosContacto'
import { ArrowLeft } from 'lucide-react'
import './EmpresasCongresos.css'

const imagenesTiposWeb = [
  '/imagenes/servicios/empresas-captura.png',
  '/imagenes/servicios/landing-captura.png',
  '/imagenes/servicios/congresos-captura.png',
  '/imagenes/servicios/catalogos-captura.png',
  '/imagenes/empresas/nexora.jpeg',
  '/imagenes/congreso/congreso-2.jpeg',
]

function EmpresasCongresos() {
  const canalesFooter = ['instagram', 'email', 'whatsapp']
    .map((tipo) => canalesContacto.find((canal) => canal.tipo === tipo))
    .filter(Boolean)

  return (
    <>
      <section className="service-branch-page professional-page" id="empresas-congresos">
        <div className="branch-hero professional-hero">
          <div className="branch-copy">
            <a className="service-back-link" href="#servicios">
              <ArrowLeft aria-hidden="true" size={20} strokeWidth={2.5} />
              <span>Volver a servicios</span>
            </a>
            <p className="eyebrow">Diseño web profesional</p>
            <h1>Páginas web para empresas, congresos y proyectos profesionales</h1>
            <span className="title-line" />
            <p>
              Sitios claros, responsivos y listos para presentar servicios, captar consultas, ordenar
              información y comunicar eventos institucionales.
            </p>
          </div>

          <div className="professional-preview">
            <img
              className="professional-image professional-image-wide"
              src="/imagenes/skyline-desktop-full.png"
              alt="Vista de escritorio de una página web para evento privado de lanzamiento"
            />
            <img
              className="professional-image professional-image-phone"
              src="/imagenes/skyline-mobile-full.png"
              alt="Vista móvil de una página web para evento privado de lanzamiento"
            />
          </div>
        </div>

        <div className="branch-actions professional-actions">
          <a className="btn btn-primary projects-branch-button" href="#proyectos">
            Ver proyectos relacionados <span>→</span>
          </a>
        </div>

        <div className="professional-points">
          <ItemFuncion item={{ titulo: 'Imagen profesional', texto: 'Transmití confianza desde el primer clic.', icono: 'heart' }} />
          <ItemFuncion item={{ titulo: 'Enfocado en resultados', texto: 'Diseño estratégico para consultas y oportunidades.', icono: 'metrics' }} />
          <ItemFuncion item={{ titulo: '100% responsive', texto: 'Tu sitio se ve perfecto en todos los dispositivos.', icono: 'responsive' }} />
        </div>

        <div className="branch-card-grid">
          {tiposWebProfesional.map((item, index) => (
            <article className="branch-card" key={item.title}>
              {imagenesTiposWeb[index] && (
                <div className="branch-card-media">
                  <img src={imagenesTiposWeb[index]} alt="" loading="lazy" decoding="async" />
                </div>
              )}
              <div className="branch-card-copy">
                <IconoServicio tipo={item.icon} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="function-strip">
          {funcionesWebProfesional.map((item) => (
            <ItemFuncion item={item} key={item.titulo} />
          ))}
        </div>

        <div className="ideal-strip">
          <h2>Ideal para</h2>
          <div className="ideal-tags">
            {etiquetasWebProfesional.map((etiqueta) => (
              <span key={etiqueta}>{etiqueta}</span>
            ))}
          </div>
          <div className="ideal-action">
            <a className="btn btn-primary" href="#contacto">
              Consultar <span>→</span>
            </a>
            <p>Contanos sobre tu proyecto y te ayudamos a hacerlo realidad.</p>
          </div>
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

export default EmpresasCongresos
