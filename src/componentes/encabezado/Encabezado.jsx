import { useEffect, useState } from 'react'
import './Encabezado.css'

const enlacesMenu = [
  { label: 'Inicio', href: '#inicio', page: 'inicio' },
  { label: 'Servicios', href: '#servicios', page: 'servicios' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos', page: 'como-trabajamos' },
  { label: 'Proyectos', href: '#proyectos', page: 'proyectos' },
  { label: 'Contacto', href: '#contacto', page: 'contacto' },
]

function Encabezado({ paginaActual }) {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const paginaActiva = ['invitaciones', 'empresas-congresos'].includes(paginaActual)
    ? 'servicios'
    : paginaActual

  useEffect(() => {
    const cerrarMenu = () => setMenuAbierto(false)

    window.addEventListener('hashchange', cerrarMenu)
    return () => window.removeEventListener('hashchange', cerrarMenu)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#inicio">
        <span>Invitationn</span> Web
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuAbierto}
        aria-controls="header-menu"
        aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setMenuAbierto((abierto) => !abierto)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`header-menu ${menuAbierto ? 'open' : ''}`} id="header-menu">
        <nav className="main-nav" aria-label="Navegación principal">
          {enlacesMenu.map((item) => (
            <a
              className={item.page === paginaActiva ? 'active' : ''}
              href={item.href}
              key={item.href}
              onClick={() => setMenuAbierto(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="budget-link" href="#contacto" onClick={() => setMenuAbierto(false)}>
          Pedir presupuesto <span>→</span>
        </a>
      </div>
    </header>
  )
}

export default Encabezado
