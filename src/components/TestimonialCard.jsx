import { motion } from 'framer-motion'
import Icon from './Icon'

function TestimonialCard({ quote, name, role, avatar, rating }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface h-full p-8"
    >
      {rating != null && (
        <div className="mb-5 flex gap-1 text-brand-500" aria-label={`${rating} xiddigood oo 5 ka mid ah`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              name="star"
              className={`h-4 w-4 ${index < rating ? 'opacity-100' : 'opacity-25'}`}
            />
          ))}
        </div>
      )}

      {quote && <p className="text-base leading-relaxed text-slate-700">“{quote}”</p>}

      <div className="mt-8 flex items-center gap-4 border-t border-brand-50 pt-6">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="h-14 w-14 rounded-full object-cover ring-4 ring-brand-50"
          />
        )}
        <div>
          {name && <p className="font-semibold text-slate-900">{name}</p>}
          {role && <p className="text-sm text-brand-600">{role}</p>}
        </div>
      </div>
    </motion.article>
  )
}

export default TestimonialCard
