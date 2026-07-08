import {
  Baby,
  BadgeCheck,
  Balloon,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Crown,
  Download,
  Gem,
  Gift,
  HeartHandshake,
  Image,
  Lightbulb,
  MapPin,
  MicVocal,
  Music,
  PenLine,
  Send,
  Shirt,
  SlidersHorizontal,
  Smile,
  Smartphone,
  Timer,
  UsersRound,
} from 'lucide-react'
import './Tarjetas.css'

const iconos = {
  rings: HeartHandshake,
  ring: Gem,
  crown: Crown,
  body: Baby,
  pacifier: Baby,
  child: Smile,
  balloon: Balloon,
  briefcase: BriefcaseBusiness,
  building: Building2,
  rocket: Send,
  microphone: MicVocal,
  book: BookOpen,
  responsive: Smartphone,
  form: PenLine,
  gallery: Image,
  image: Image,
  map: MapPin,
  clock: Timer,
  whatsapp: Send,
  music: Music,
  dress: Shirt,
  idea: Lightbulb,
  design: PenLine,
  sliders: SlidersHorizontal,
  send: Send,
  users: UsersRound,
  calendar: CalendarDays,
  download: Download,
  metrics: BadgeCheck,
  rsvp: Gift,
  interactive: HeartHandshake,
  mobile: Smartphone,
}

function IconoServicio({ tipo }) {
  const Icono = iconos[tipo] || HeartHandshake

  return (
    <span className={`line-icon lucide-icon icon-${tipo}`} aria-hidden="true">
      <Icono strokeWidth={1.8} />
    </span>
  )
}

export default IconoServicio
