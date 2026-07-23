import { Link } from 'react-router-dom'
import Icon from './Icon'

function Footer({ brand, description = '', columns = [], socialLinks = [], copyright }) {
  return (
    <footer className="relative w-full overflow-hidden bg-brand-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div className="space-y-5 lg:pr-4">
          <Link
            to="/"
            className="font-display text-4xl font-semibold tracking-[0.04em] text-white transition hover:text-brand-100"
          >
            {brand}
          </Link>
          {description && (
            <p className="max-w-sm text-sm leading-relaxed text-brand-100/90">{description}</p>
          )}
          {socialLinks.length > 0 && (
            <ul className="flex flex-wrap items-center gap-3 pt-1">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-700/80 bg-brand-800/50 text-brand-100 transition duration-300 hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-700 hover:text-white"
                  >
                    <Icon name={item.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {columns.map((column) => (
          <div key={column.title} className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="inline-block text-sm text-brand-100/90 transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {copyright && (
        <div className="relative border-t border-brand-800/80">
          <p className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-brand-200 sm:px-6 lg:px-8">
            {copyright}
          </p>
        </div>
      )}
    </footer>
  )
}

export default Footer
