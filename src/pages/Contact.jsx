import { useState } from 'react'
import { Hero, SectionTitle, Button, Icon, MotionReveal } from '../components'
import { contactDetails, pageHeroes, pageSections, mapEmbed } from '../data'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const inputClassName =
  'w-full rounded-2xl border border-slate-200 px-4 py-3.5 outline-none transition duration-300 focus:border-brand-500 focus:ring-4 focus:ring-brand-100'

function FormField({ label, name, type = 'text', value, onChange, placeholder, required, rows }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-slate-700">{label}</span>
      {rows ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={inputClassName}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClassName}
          placeholder={placeholder}
        />
      )}
    </label>
  )
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const hero = pageHeroes.contact
  const sections = pageSections.contact
  const fields = sections.form.fields

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="bg-white">
      <Hero variant="page" eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionTitle
              eyebrow={sections.info.eyebrow}
              title={sections.info.title}
              subtitle={sections.info.subtitle}
              align="left"
              className="mb-8"
            />

            <ul className="space-y-4">
              {contactDetails.map((item, index) => (
                <MotionReveal key={item.label} delay={index * 0.06}>
                  <li className="flex gap-4 rounded-2xl border border-brand-100 bg-brand-50/40 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,64,175,0.08)]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">
                        {item.label}
                      </p>
                      <p className="mt-2 text-base font-medium text-slate-900">{item.value}</p>
                    </div>
                  </li>
                </MotionReveal>
              ))}
            </ul>
          </div>

          <MotionReveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-[0_20px_50px_rgba(30,64,175,0.1)] sm:p-8"
            >
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                {sections.form.title}
              </h2>
              <p className="text-sm text-slate-600">{sections.form.subtitle}</p>

              {submitted && (
                <p className="rounded-md bg-brand-50 px-4 py-3 text-sm font-medium text-brand-800">
                  {sections.form.successMessage}
                </p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label={fields.name.label}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={fields.name.placeholder}
                  required
                />
                <FormField
                  label={fields.email.label}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={fields.email.placeholder}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label={fields.phone.label}
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={fields.phone.placeholder}
                />
                <FormField
                  label={fields.subject.label}
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={fields.subject.placeholder}
                  required
                />
              </div>

              <FormField
                label={fields.message.label}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={fields.message.placeholder}
                required
                rows="5"
              />

              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                {sections.form.submitLabel}
              </Button>
            </form>
          </MotionReveal>
        </div>

        <div className="mt-16">
          <SectionTitle
            eyebrow={sections.map.eyebrow}
            title={sections.map.title}
            subtitle={sections.map.subtitle}
            align="left"
          />
          <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-[0_16px_40px_rgba(30,64,175,0.08)]">
            <iframe
              title={mapEmbed.title}
              src={mapEmbed.src}
              className="h-80 w-full border-0 sm:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="border-t border-brand-100 bg-white px-5 py-3">
              <p className="text-sm font-medium text-brand-800">{mapEmbed.locationLabel}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
