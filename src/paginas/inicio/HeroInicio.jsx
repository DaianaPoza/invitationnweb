import { rutaAsset } from '../../utils/rutasAssets'

function HeroInicio() {
  return (
    <section className="hero reveal-section reveal-section--hero" id="inicio">
      <div className="hero-content">

<img
  className="hero-logo"
  src={rutaAsset('/imagenes/inicio/logo-iw.png')}
  alt="Logo IW de Invitationn Web"
/>

        <p className="hero-wordmark" aria-label="invitationnweb">
          invitationn<span>web</span>
        </p>
        <p className="hero-tagline">Diseño web <span>•</span> Invitaciones digitales</p>
        <span className="title-line" />
        <p className="hero-text">
          Creamos sitios web, landing pages e invitaciones digitales interactivas para empresas,
          profesionales y eventos, adaptadas a cada proyecto.
        </p>
        <span className="title-line hero-line-bottom" />
      <div className="hero-devices" aria-label="Diseños adaptados a escritorio, tablet y celular">
  <svg className="device-icon device-laptop" viewBox="0 0 82 54" fill="none">
    <rect x="17" y="7" width="48" height="32" rx="2.5" />
    <path d="M13 40H69L76 50H6L13 40Z" />
    <path d="M31 45H51" />
  </svg>

  <svg className="device-icon device-tablet" viewBox="0 0 50 70" fill="none">
    <rect x="9" y="4" width="32" height="62" rx="4" />
    <circle cx="25" cy="58" r="1.6" />
  </svg>

  <svg className="device-icon device-phone" viewBox="0 0 38 70" fill="none">
    <rect x="8" y="8" width="22" height="54" rx="3.5" />
    <circle cx="19" cy="55" r="1.4" />
  </svg>
</div>
      </div>
    </section>
  )
}

export default HeroInicio
