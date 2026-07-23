import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SectionTitle, PropertyCard, Button, MotionReveal } from '../components'
import { properties, agents, pageSections } from '../data'

function PropertyDetails() {
  const { id } = useParams()
  const copy = pageSections.propertyDetails
  const property = properties.find((item) => String(item.id) === String(id)) || properties[0]
  const gallery = property.gallery?.length ? property.gallery : [property.image]
  const [activeImage, setActiveImage] = useState(gallery[0])

  useEffect(() => {
    setActiveImage(gallery[0])
  }, [property.id])

  const agent = agents.find((item) => item.id === property.agentId) || agents[0]
  const relatedProperties = useMemo(
    () => properties.filter((item) => item.id !== property.id).slice(0, 3),
    [property.id],
  )

  const overview = [
    {
      label: copy.overviewLabels.bedrooms,
      value: property.beds > 0 ? property.beds : '—',
    },
    {
      label: copy.overviewLabels.bathrooms,
      value: property.baths > 0 ? property.baths : '—',
    },
    { label: copy.overviewLabels.area, value: property.area },
    { label: copy.overviewLabels.status, value: property.status },
    { label: copy.overviewLabels.type, value: property.category },
    { label: copy.overviewLabels.location, value: property.location },
  ]

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Link to="/properties" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
          {copy.backLabel}
        </Link>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.7fr_0.8fr]">
          <MotionReveal className="overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(30,64,175,0.12)]">
            <img
              src={activeImage}
              alt={property.title}
              className="h-[24rem] w-full object-cover transition duration-500 sm:h-[30rem] lg:h-[36rem]"
            />
          </MotionReveal>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
            {gallery.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded-2xl border-2 transition duration-300 hover:opacity-95 ${
                  activeImage === image
                    ? 'border-brand-700 shadow-[0_10px_24px_rgba(29,78,216,0.2)]'
                    : 'border-transparent'
                }`}
              >
                <img src={image} alt="" className="h-32 w-full object-cover sm:h-36 lg:h-[8.1rem]" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr_0.9fr]">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">
                  {property.status}
                </p>
                <h1 className="mt-2 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
                  {property.title}
                </h1>
                <p className="mt-3 text-slate-600">{property.location}</p>
              </div>
              <p className="font-display text-4xl font-semibold text-brand-700">{property.price}</p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                {copy.descriptionTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{property.description}</p>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {overview.map((item) => (
                <li
                  key={item.label}
                  className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(30,64,175,0.08)]"
                >
                  <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 font-semibold capitalize text-slate-900">{item.value}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                {copy.featuresTitle}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {(property.features || []).map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-brand-100 px-4 py-3.5 text-sm text-slate-700 transition duration-300 hover:border-brand-200 hover:bg-brand-50/60"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_20px_50px_rgba(30,64,175,0.1)] lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.15em] text-brand-600 uppercase">
              {copy.listedPriceLabel}
            </p>
            <p className="mt-2 font-display text-4xl font-semibold text-brand-700">{property.price}</p>

            <div className="mt-6 border-t border-brand-50 pt-6">
              <img
                src={agent.image}
                alt={agent.name}
                className="h-20 w-20 rounded-full object-cover ring-2 ring-brand-100"
              />
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900">{agent.name}</h3>
              <p className="text-sm text-brand-600">{agent.role}</p>
              <p className="mt-3 text-sm text-slate-600">{agent.email}</p>
              <p className="text-sm text-slate-600">{agent.phone}</p>
            </div>

            <div className="mt-6 space-y-3">
              <Button to="/contact" variant="primary" className="w-full" size="lg">
                {copy.contactAgentLabel}
              </Button>
              <Button href={`mailto:${agent.email}`} variant="secondary" className="w-full">
                {copy.emailAgentLabel}
              </Button>
            </div>
          </aside>
        </div>

        <div className="mt-20">
          <SectionTitle
            title={copy.similar.title}
            subtitle={copy.similar.subtitle}
            align="left"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProperties.map((item, index) => (
              <MotionReveal key={item.id} delay={index * 0.08}>
                <PropertyCard {...item} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyDetails
