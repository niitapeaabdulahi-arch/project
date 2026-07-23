import { motion } from 'framer-motion'
import Icon from './Icon'

function ServiceCard({ icon, title, description }) {
  const renderIcon = () => {
    if (!icon) return null
    if (typeof icon === 'string') {
      return <Icon name={icon} className="h-7 w-7" />
    }
    return icon
  }

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface group p-8"
    >
      {icon && (
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition duration-300 group-hover:scale-110 group-hover:bg-brand-100">
          {renderIcon()}
        </div>
      )}
      {title && <h3 className="font-display text-2xl font-semibold text-slate-900">{title}</h3>}
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      )}
    </motion.article>
  )
}

export default ServiceCard
