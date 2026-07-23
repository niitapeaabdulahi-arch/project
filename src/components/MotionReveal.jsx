import { motion } from 'framer-motion'

function MotionReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  y = 28,
  as: Component = motion.div,
  ...props
}) {
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default MotionReveal
