import FooterContacto from '../../componentes/footer/FooterContacto'
import Contacto from '../contacto/Contacto'
import HeroInicio from './HeroInicio'
import Productos from '../productos/Productos'
import ServiciosInicio from './ServiciosInicio'
import './Inicio.css'

function Inicio() {
  return (
    <>
      <HeroInicio />
      <ServiciosInicio />
      <Productos />
      <Contacto />
      <FooterContacto />
    </>
  )
}

export default Inicio
