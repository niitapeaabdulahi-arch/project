import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button'
import Icon from './Icon'

function Header({ logo, links = [], ctaLabel, ctaTo }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-brand-100/80 bg-white/90 shadow-[0_8px_30px_rgba(30,64,175,0.08)] backdrop-blur-xl'
          : 'border-b border-transparent bg-white/95 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="font-display text-3xl font-semibold tracking-[0.04em] text-brand-800 transition duration-300 hover:text-brand-700"
        >
          {logo}
        </NavLink>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:right-3 after:bottom-0 after:left-3 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-600 after:transition-transform after:duration-300 hover:text-brand-700 ${
                    isActive
                      ? 'text-brand-700 after:scale-x-100'
                      : 'text-slate-600 after:scale-x-0 hover:after:scale-x-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {ctaLabel && ctaTo && (
            <Button to={ctaTo} variant="primary" className="hidden sm:inline-flex">
              {ctaLabel}
            </Button>
          )}

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-100 text-brand-800 transition duration-300 hover:border-brand-200 hover:bg-brand-50 lg:hidden"
            aria-label="Fur ama xir liiska"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <Icon name={isOpen ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-brand-100 bg-white lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 text-sm font-medium transition duration-300 ${
                        isActive
                          ? 'bg-brand-50 text-brand-700'
                          : 'text-slate-700 hover:bg-brand-50 hover:text-brand-700'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              {ctaLabel && ctaTo && (
                <li className="pt-2">
                  <Button
                    to={ctaTo}
                    variant="primary"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {ctaLabel}
                  </Button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
