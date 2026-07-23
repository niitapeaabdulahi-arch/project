import { motion } from 'framer-motion'
import Icon from './Icon'

function AgentCard({ image, name, role, email, phone, socialLinks = [] }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface group overflow-hidden text-center"
    >
      {image && (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-80 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>
      )}

      <div className="space-y-3 p-6">
        {name && <h3 className="font-display text-2xl font-semibold text-slate-900">{name}</h3>}
        {role && <p className="text-sm font-semibold text-brand-600">{role}</p>}

        <div className="space-y-1 text-sm text-slate-600">
          {email && (
            <a href={`mailto:${email}`} className="block transition duration-300 hover:text-brand-700">
              {email}
            </a>
          )}
          {phone && (
            <a href={`tel:${phone}`} className="block transition duration-300 hover:text-brand-700">
              {phone}
            </a>
          )}
        </div>

        {socialLinks.length > 0 && (
          <ul className="flex items-center justify-center gap-2 pt-3">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-100 text-slate-600 transition duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon name={item.icon} className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}

export default AgentCard
