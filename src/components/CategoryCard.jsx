import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function CategoryCard({ name, slug, count, image, countSuffix }) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
      <Link
        to={`/properties?category=${slug}`}
        className="group relative block h-72 overflow-hidden rounded-3xl shadow-[0_14px_40px_rgba(30,64,175,0.12)] transition duration-500 hover:shadow-[0_24px_55px_rgba(30,64,175,0.18)] sm:h-80"
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/35 to-transparent transition duration-500 group-hover:from-brand-900/95" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <h3 className="font-display text-3xl font-semibold transition duration-300 group-hover:translate-x-1">
            {name}
          </h3>
          {count != null && (
            <p className="mt-2 text-sm text-brand-100">
              {count} {countSuffix}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

export default CategoryCard
