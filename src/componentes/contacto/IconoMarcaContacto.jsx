import './IconoMarcaContacto.css'

function IconoMarcaContacto({ tipo, compacto = false }) {
  return (
    <span className={`brand-contact-icon ${compacto ? 'compact' : ''}`} aria-hidden="true">
      {tipo === 'whatsapp' && (
        <svg viewBox="0 0 64 64" role="img">
          <circle cx="32" cy="32" r="30" fill="#25D366" />
          <path
            d="M32.1 11.7c-11 0-20 8.9-20 19.9 0 3.8 1.1 7.4 3 10.4l-3.2 10.8 11.2-3a20 20 0 0 0 9 2.2h.1c11 0 19.9-8.9 19.9-19.9S43.1 11.7 32.1 11.7Zm0 36.9h-.1a16.6 16.6 0 0 1-8.4-2.3l-.6-.4-6.6 1.8 1.8-6.4-.4-.7a16.5 16.5 0 1 1 14.3 8Zm9.1-12.4c-.5-.2-2.9-1.4-3.4-1.6-.5-.2-.8-.2-1.1.3-.3.5-1.3 1.6-1.6 1.9-.3.3-.6.4-1.1.1-.5-.2-2.1-.8-4-2.5-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1.1-2.7-1.5-3.7-.4-1-.8-.8-1.1-.8h-1c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.3 5.1 8.1 7.1 1.1.5 2 .8 2.7 1 1.1.4 2.2.3 3 .2.9-.1 2.9-1.2 3.3-2.3.4-1.1.4-2.1.3-2.3-.2-.2-.5-.3-1-.6Z"
            fill="#fff"
          />
        </svg>
      )}

      {tipo === 'email' && (
        <svg viewBox="0 0 64 64" role="img">
          <path d="M8 17.4v29.2c0 3 2.4 5.4 5.4 5.4h7.4V30.9L8 17.4Z" fill="#4285F4" />
          <path d="M43.2 52h7.4c3 0 5.4-2.4 5.4-5.4V17.4L43.2 30.9V52Z" fill="#34A853" />
          <path d="M43.2 20.5V30.9L56 17.4v-1.2c0-6.7-7.8-10.5-13.1-6.4L32 18.2 21.1 9.8C15.8 5.7 8 9.5 8 16.2v1.2l12.8 13.5V20.5L32 29.1l11.2-8.6Z" fill="#EA4335" />
          <path d="M20.8 30.9 8 17.4v10.1l12.8 13.5V30.9Z" fill="#C5221F" />
          <path d="M43.2 30.9v10.1L56 27.5V17.4L43.2 30.9Z" fill="#FBBC04" />
        </svg>
      )}

      {tipo === 'instagram' && (
        <svg viewBox="0 0 64 64" role="img">
          <defs>
            <radialGradient id="instagramGradient" cx="30%" cy="107%" r="130%">
              <stop offset="0" stopColor="#FEDA75" />
              <stop offset="0.25" stopColor="#FA7E1E" />
              <stop offset="0.5" stopColor="#D62976" />
              <stop offset="0.75" stopColor="#962FBF" />
              <stop offset="1" stopColor="#4F5BD5" />
            </radialGradient>
          </defs>
          <rect width="52" height="52" x="6" y="6" rx="14" fill="url(#instagramGradient)" />
          <circle cx="32" cy="32" r="11" fill="none" stroke="#fff" strokeWidth="5" />
          <circle cx="45" cy="19" r="3.8" fill="#fff" />
          <rect width="36" height="36" x="14" y="14" rx="10" fill="none" stroke="#fff" strokeWidth="4" />
        </svg>
      )}
    </span>
  )
}

export default IconoMarcaContacto
