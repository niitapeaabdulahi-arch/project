import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-brand-700 text-white shadow-[0_10px_24px_rgba(29,78,216,0.28)] hover:bg-brand-800 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(29,78,216,0.34)]',
  secondary:
    'bg-brand-50 text-brand-800 hover:bg-brand-100 hover:-translate-y-0.5',
  outline:
    'border border-white/80 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:-translate-y-0.5',
  outlineBlue:
    'border border-brand-600 bg-transparent text-brand-700 hover:bg-brand-50 hover:-translate-y-0.5',
  ghost: 'bg-transparent text-slate-700 hover:bg-brand-50 hover:text-brand-800',
  light:
    'bg-white text-brand-800 shadow-[0_10px_24px_rgba(15,23,42,0.12)] hover:bg-brand-50 hover:-translate-y-0.5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
