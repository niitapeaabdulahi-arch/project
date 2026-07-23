function SectionTitle({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-center items-center'

  return (
    <div className={`mb-12 flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-brand-700 uppercase">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionTitle
