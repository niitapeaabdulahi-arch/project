import {
  FaBath,
  FaBed,
  FaClipboardList,
  FaDollarSign,
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaKey,
  FaLinkedinIn,
  FaRulerCombined,
  FaShieldAlt,
  FaStar,
  FaTwitter,
  FaUsers,
} from 'react-icons/fa'
import { FiMapPin, FiSearch, FiSettings, FiTrendingUp, FiZap } from 'react-icons/fi'
import { HiOutlineMail, HiOutlineMenu, HiOutlinePhone, HiOutlineX } from 'react-icons/hi'
import { MdAccessTime, MdOutlineLocationOn } from 'react-icons/md'

const iconMap = {
  home: FaHome,
  key: FaKey,
  clipboard: FaClipboardList,
  settings: FiSettings,
  trending: FiTrendingUp,
  dollar: FaDollarSign,
  shield: FaShieldAlt,
  star: FaStar,
  users: FaUsers,
  zap: FiZap,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  map: MdOutlineLocationOn,
  email: HiOutlineMail,
  phone: HiOutlinePhone,
  clock: MdAccessTime,
  bed: FaBed,
  bath: FaBath,
  ruler: FaRulerCombined,
  search: FiSearch,
  menu: HiOutlineMenu,
  close: HiOutlineX,
  'map-pin': FiMapPin,
}

function Icon({ name, className = '' }) {
  const Component = iconMap[name]
  if (!Component) return null
  return <Component className={className} aria-hidden="true" />
}

export default Icon
