import { mockupsInicio } from '../../data/datosInicio'

function MockupNavegador({ variante, className }) {
  const item = mockupsInicio[variante]
  const rutaImagen = `${import.meta.env.BASE_URL}${item.image.replace(/^\/+/, '')}`

  return (
    <article className={`browser-mockup ${item.device}-mockup ${className}`}>
      <a
        className="mockup-link"
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver demo: ${item.label}`}
        title={`Ver demo: ${item.label}`}
      >
        {item.device === 'browser' ? (
          <div className="browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        ) : (
          <span className="phone-notch" aria-hidden="true" />
        )}
        <img className="mockup-image" src={rutaImagen} alt={`Vista previa de ${item.label}`} />
        <span className="mockup-action" aria-hidden="true">Ver demo ↗</span>
      </a>
    </article>
  )
}

export default MockupNavegador
