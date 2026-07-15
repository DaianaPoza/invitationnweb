export function rutaAsset(ruta) {
  return `${import.meta.env.BASE_URL}${ruta.replace(/^\/+/, '')}`
}
