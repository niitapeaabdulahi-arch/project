import { motion } from 'framer-motion'
import Button from './Button'

function Hero({
  variant = 'banner',
  brand,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
}) {
  if (variant === 'page') {
    return (
      <section className="relative overflow-hidden bg-brand-800 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.4),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] text-brand-100 uppercase"
            >
              {eyebrow}
            </motion.p>
          )}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-5 max-w-2xl text-base text-brand-100 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-900">
      {backgroundImage && (
        <motion.img
          src={backgroundImage}
          alt=""
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/92 via-brand-900/72 to-brand-800/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.28),transparent_42%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-7 text-white">
          {brand && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="font-display text-2xl font-semibold tracking-[0.22em] text-brand-100 uppercase sm:text-3xl"
            >
              {brand}
            </motion.p>
          )}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {title}
            </motion.h1>
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="max-w-xl text-lg leading-relaxed text-brand-50/90 sm:text-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {primaryCta && (
                <Button to={primaryCta.to} variant="light" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button to={secondaryCta.to} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
