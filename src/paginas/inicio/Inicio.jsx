import Contacto from '../contacto/Contacto'
import ComoTrabajamos from './ComoTrabajamos'
import HeroInicio from './HeroInicio'
import Productos from '../productos/Productos'
import ServiciosInicio from './ServiciosInicio'
import './Inicio.css'

function Inicio() {
  return (
    <>
      <HeroInicio />
      <ServiciosInicio />
      <ComoTrabajamos />
      <Productos />
      <Contacto />
    </>
  )
}

export default Inicio
