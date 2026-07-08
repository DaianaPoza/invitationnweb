import IconoServicio from '../tarjetas/IconoServicio'

function PrestacionServicio({ prestacion }) {
  return (
    <div className="service-feature">
      <IconoServicio tipo={prestacion.icon} />
      <span>{prestacion.title}</span>
    </div>
  )
}

export default PrestacionServicio
