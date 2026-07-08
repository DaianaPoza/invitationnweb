import MockupNavegador from '../../componentes/mockup-navegador/MockupNavegador'
import { beneficiosInicio } from '../../data/datosInicio'

function HeroInicio() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="eyebrow">Soluciones digitales que cuentan tu historia</p>
        <h1>Diseño web para eventos, marcas y experiencias digitales</h1>
        <span className="title-line" />
        <p className="hero-text">
          Creamos sitios web, landing pages e invitaciones digitales interactivas para celebraciones,
          empresas y congresos.
        </p>

        <div className="hero-actions">
          <a className="btn btn-outline" href="#servicios">
            Ver servicios <span>→</span>
          </a>
          <a className="btn btn-primary" href="#proyectos">
            Ver proyectos <span>→</span>
          </a>
        </div>

        <div className="trust-row" aria-label="Beneficios principales">
          {beneficiosInicio.map((item) => (
            <div className="trust-item" key={item}>
              <span className="trust-icon" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Vista previa de trabajos">
        <MockupNavegador variante="congress" className="mockup-congress" />
        <MockupNavegador variante="wedding" className="mockup-wedding" />
        <MockupNavegador variante="fifteen" className="mockup-fifteen" />
      </div>
    </section>
  )
}

export default HeroInicio
