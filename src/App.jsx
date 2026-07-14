import Encabezado from './componentes/encabezado/Encabezado'
import EmpresasCongresos from './paginas/empresasCongresos/EmpresasCongresos'
import Inicio from './paginas/inicio/Inicio'
import Invitaciones from './paginas/invitaciones/Invitaciones'
import { useEffect, useState } from 'react'

function obtenerHashActual() {
  return window.location.hash || '#inicio'
}

function obtenerVistaActual(hash) {
  if (hash === '#invitaciones') {
    return 'invitaciones'
  }

  if (hash === '#empresas-congresos') {
    return 'empresas-congresos'
  }

  return 'inicio'
}

function obtenerPaginaActiva(hash, vistaActual) {
  if (vistaActual === 'invitaciones' || vistaActual === 'empresas-congresos') {
    return 'servicios'
  }

  if (hash === '#servicios') {
    return 'servicios'
  }

  if (hash === '#proyectos') {
    return 'proyectos'
  }

  if (hash === '#como-trabajamos') {
    return 'como-trabajamos'
  }

  if (hash === '#contacto') {
    return 'contacto'
  }

  return 'inicio'
}

function App() {
  const [hashActual, setHashActual] = useState(obtenerHashActual)
  const vistaActual = obtenerVistaActual(hashActual)
  const paginaActiva = obtenerPaginaActiva(hashActual, vistaActual)

  useEffect(() => {
    const manejarCambioDeHash = () => setHashActual(obtenerHashActual())

    window.addEventListener('hashchange', manejarCambioDeHash)
    return () => window.removeEventListener('hashchange', manejarCambioDeHash)
  }, [])

  useEffect(() => {
    if (vistaActual !== 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hashActual.replace('#', '') || 'inicio'
    const destino =
      id === 'servicios'
        ? document.querySelector('#servicios .services-intro')
        : id === 'como-trabajamos'
          ? document.querySelector('#como-trabajamos .contact-section-heading')
        : id === 'proyectos'
          ? document.querySelector('#proyectos .products-page-heading')
        : id === 'contacto'
          ? document.querySelector('#contacto .contact-main-heading')
        : document.getElementById(id)

    if (destino) {
      requestAnimationFrame(() => {
        destino.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [hashActual, vistaActual])

  return (
    <main className="page-shell">
      <Encabezado paginaActual={paginaActiva} />
      {vistaActual === 'invitaciones' && <Invitaciones />}
      {vistaActual === 'empresas-congresos' && <EmpresasCongresos />}
      {vistaActual === 'inicio' && <Inicio />}
    </main>
  )
}

export default App
