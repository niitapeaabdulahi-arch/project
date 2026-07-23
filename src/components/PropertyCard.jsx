import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from './Button'
import Icon from './Icon'

function PropertyCard({
  id,
  image,
  title,
  price,
  location,
  beds,
  baths,
  area,
  status,
  to,
  detailsLabel = 'Arag Faahfaahinta',
  bedsLabel = 'Jiif',
  bathsLabel = 'Musqul',
}) {
  const detailsPath = to || `/properties/${id}`

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface group overflow-hidden"
    >
      <Link to={detailsPath} className="relative block overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-110 sm:h-72"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/35 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        {status && (
          <span className="absolute top-4 left-4 rounded-full bg-brand-700/95 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-lg backdrop-blur-sm">
            {status}
          </span>
        )}
      </Link>

      <div className="space-y-4 p-6">
        <div>
          <Link
            to={detailsPath}
            className="font-display text-2xl font-semibold text-slate-900 transition duration-300 hover:text-brand-700"
          >
            {title}
          </Link>
          {location && (
            <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <Icon name="map-pin" className="h-3.5 w-3.5 shrink-0 text-brand-600" />
              {location}
            </p>
          )}
        </div>

        {price && <p className="text-2xl font-bold tracking-tight text-brand-700">{price}</p>}

        <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-brand-50 pt-4 text-sm text-slate-600">
          {beds != null && beds > 0 && (
            <li className="inline-flex items-center gap-1.5">
              <Icon name="bed" className="h-3.5 w-3.5 text-brand-600" />
              {beds} {bedsLabel}
            </li>
          )}
          {baths != null && baths > 0 && (
            <li className="inline-flex items-center gap-1.5">
              <Icon name="bath" className="h-3.5 w-3.5 text-brand-600" />
              {baths} {bathsLabel}
            </li>
          )}
          {area && (
            <li className="inline-flex items-center gap-1.5">
              <Icon name="ruler" className="h-3.5 w-3.5 text-brand-600" />
              {area}
            </li>
          )}
        </ul>

        <Button to={detailsPath} variant="secondary" className="w-full">
          {detailsLabel}
        </Button>
      </div>
    </motion.article>
  )
}

export default PropertyCard
