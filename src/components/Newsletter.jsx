import { useState } from 'react'
import Button from './Button'

function Newsletter({ title, subtitle, placeholder, buttonLabel, onSubmit }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.(email)
    setEmail('')
  }

  return (
    <section className="relative w-full overflow-hidden bg-brand-800 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.4),transparent_50%)]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {title && (
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
        )}
        {subtitle && <p className="mt-4 text-base text-brand-100 sm:text-lg">{subtitle}</p>}

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-3 rounded-3xl border border-brand-600/60 bg-brand-900/35 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.25)] backdrop-blur sm:flex-row sm:items-center"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={placeholder}
            required
            className="w-full flex-1 rounded-2xl border border-transparent bg-transparent px-5 py-3.5 text-sm text-white outline-none placeholder:text-brand-200 focus:border-brand-400"
          />
          <Button type="submit" variant="light" size="lg" className="shrink-0">
            {buttonLabel}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
