import MotionReveal from './MotionReveal'

function Stats({ items = [] }) {
  if (!items.length) return null

  return (
    <section className="relative w-full overflow-hidden bg-brand-700 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, index) => (
          <MotionReveal key={item.label} delay={index * 0.08} className="text-center">
            <p className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {item.value}
            </p>
            <p className="mt-3 text-sm font-medium tracking-[0.14em] text-brand-100 uppercase">
              {item.label}
            </p>
          </MotionReveal>
        ))}
      </div>
    </section>
  )
}

export default Stats
