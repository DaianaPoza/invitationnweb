import Encabezado from './componentes/encabezado/Encabezado'
import Contacto from './paginas/contacto/Contacto'
import EmpresasCongresos from './paginas/empresasCongresos/EmpresasCongresos'
import Inicio from './paginas/inicio/Inicio'
import Invitaciones from './paginas/invitaciones/Invitaciones'
import Productos from './paginas/productos/Productos'
import Servicios from './paginas/servicios/Servicios'
import { useEffect, useState } from 'react'

function obtenerPaginaActual() {
  const hash = window.location.hash || '#inicio'

  if (hash === '#servicios') {
    return 'servicios'
  }

  if (hash === '#invitaciones') {
    return 'invitaciones'
  }

  if (hash === '#empresas-congresos') {
    return 'empresas-congresos'
  }

  if (hash === '#proyectos') {
    return 'proyectos'
  }

  if (hash === '#contacto') {
    return 'contacto'
  }

  return 'inicio'
}

function App() {
  const [paginaActual, setPaginaActual] = useState(obtenerPaginaActual)

  useEffect(() => {
    const manejarCambioDeHash = () => setPaginaActual(obtenerPaginaActual())

    window.addEventListener('hashchange', manejarCambioDeHash)
    return () => window.removeEventListener('hashchange', manejarCambioDeHash)
  }, [])

  useEffect(() => {
    const hash = window.location.hash || '#inicio'

    if (
      hash === '#servicios' ||
      hash === '#proyectos' ||
      hash === '#invitaciones' ||
      hash === '#empresas-congresos' ||
      hash === '#contacto'
    ) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [paginaActual])

  return (
    <main className="page-shell">
      <Encabezado paginaActual={paginaActual} />
      {paginaActual === 'servicios' && <Servicios />}
      {paginaActual === 'invitaciones' && <Invitaciones />}
      {paginaActual === 'empresas-congresos' && <EmpresasCongresos />}
      {paginaActual === 'proyectos' && <Productos />}
      {paginaActual === 'contacto' && <Contacto />}
      {paginaActual === 'inicio' && <Inicio />}
    </main>
  )
}

export default App
