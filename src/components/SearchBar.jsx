import Button from './Button'
import Icon from './Icon'

function SearchBar({
  fields = [],
  values = {},
  onChange,
  onSubmit,
  submitLabel,
  className = '',
}) {
  const handleChange = (name, value) => {
    onChange?.({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.(values)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 rounded-3xl border border-brand-100 bg-white/95 p-5 shadow-[0_24px_60px_rgba(30,64,175,0.14)] backdrop-blur sm:p-6 md:flex-row md:items-end ${className}`}
    >
      {fields.map((field) => (
        <label key={field.name} className="flex flex-1 flex-col gap-2 text-left">
          {field.label && (
            <span className="text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase">
              {field.label}
            </span>
          )}

          {field.type === 'select' ? (
            <select
              name={field.name}
              value={values[field.name] ?? ''}
              onChange={(event) => handleChange(field.name, event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
            >
              <option value="">{field.placeholder || 'Dooro'}</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type || 'text'}
              name={field.name}
              value={values[field.name] ?? ''}
              placeholder={field.placeholder}
              onChange={(event) => handleChange(field.name, event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
            />
          )}
        </label>
      ))}

      <Button type="submit" variant="primary" size="lg" className="shrink-0 gap-2 md:self-end">
        <Icon name="search" className="h-4 w-4" />
        {submitLabel}
      </Button>
    </form>
  )
}

export default SearchBar
