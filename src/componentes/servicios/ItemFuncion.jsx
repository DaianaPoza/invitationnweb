import IconoServicio from '../tarjetas/IconoServicio'

function ItemFuncion({ item }) {
  return (
    <article className="function-item">
      <IconoServicio tipo={item.icono} />
      <div>
        <h3>{item.titulo}</h3>
        {item.texto && <p>{item.texto}</p>}
      </div>
    </article>
  )
}

export default ItemFuncion
