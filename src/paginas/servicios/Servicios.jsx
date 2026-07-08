import {
  prestacionesServicios,
  serviciosEventos,
  serviciosProfesionales,
} from '../../data/datosServicios'
import IconoMarcaContacto from '../../componentes/contacto/IconoMarcaContacto'
import GrupoServicios from '../../componentes/servicios/GrupoServicios'
import PrestacionServicio from '../../componentes/servicios/PrestacionServicio'
import { canalesContacto } from '../../data/datosContacto'
import './Servicios.css'

function Servicios() {
  const canalesFooter = ['instagram', 'email', 'whatsapp']
    .map((tipo) => canalesContacto.find((canal) => canal.tipo === tipo))
    .filter(Boolean)

  return (
    <>
      <section className="services-page-view" id="servicios">
        <div className="services-page-heading">
          <h1>Servicios digitales a medida</h1>
          <div className="heading-divider">
            <span />
            <span />
          </div>
          <p>
            Diseñamos sitios web, micrositios e invitaciones interactivas pensadas para comunicar, emocionar y convertir.
          </p>
        </div>

        <GrupoServicios
          id="eventos-sociales"
          titulo="Eventos sociales"
          icono="heart"
          servicios={serviciosEventos}
          textoBoton="Ver invitaciones digitales"
          hrefBoton="#invitaciones"
        />
        <GrupoServicios
          id="marcas-empresas-congresos"
          titulo="Marcas, empresas y congresos"
          icono="briefcase"
          servicios={serviciosProfesionales}
          textoBoton="Ver páginas profesionales"
          hrefBoton="#empresas-congresos"
        />

        <div className="features-strip">
          {prestacionesServicios.map((prestacion) => (
            <PrestacionServicio prestacion={prestacion} key={prestacion.title} />
          ))}
        </div>

        <div className="services-cta">
          <div>
            <h2>¿No sabés qué tipo de página necesitás?</h2>
            <p>Contanos tu idea y te recomendamos la mejor solución para tu objetivo.</p>
          </div>
          <a className="btn btn-gold" href="#contacto">
            Te asesoramos <span>→</span>
          </a>
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

export default Servicios
