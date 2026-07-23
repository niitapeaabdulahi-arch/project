import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from './Button'

function BlogCard({
  image,
  title,
  excerpt,
  date,
  author,
  category,
  to,
  readMoreLabel = 'Sii Akhri',
  byLabel = 'Qoray',
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="card-surface group flex h-full flex-col overflow-hidden"
    >
      {image && (
        <Link to={to || '/blog'} className="relative block overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-60 w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/25 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </Link>
      )}

      <div className="flex flex-1 flex-col space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          {category && (
            <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
              {category}
            </span>
          )}
          {date && <time>{date}</time>}
          {author && (
            <span>
              {byLabel} {author}
            </span>
          )}
        </div>

        {title && (
          <Link
            to={to || '/blog'}
            className="font-display text-2xl font-semibold text-slate-900 transition duration-300 hover:text-brand-700"
          >
            {title}
          </Link>
        )}

        {excerpt && <p className="flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>}

        <Button to={to || '/blog'} variant="secondary" className="mt-auto w-full sm:w-auto">
          {readMoreLabel}
        </Button>
      </div>
    </motion.article>
  )
}

export default BlogCard
