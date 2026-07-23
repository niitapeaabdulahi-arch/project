import { Hero, SectionTitle, ServiceCard, Button, MotionReveal } from '../components'
import { services, pageHeroes, pageSections } from '../data'

function Services() {
  const hero = pageHeroes.services
  const sections = pageSections.services

  return (
    <div className="bg-white">
      <Hero variant="page" eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.offer.eyebrow}
          title={sections.offer.title}
          subtitle={sections.offer.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <MotionReveal key={service.id} delay={(index % 3) * 0.08}>
              <ServiceCard {...service} />
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-16 overflow-hidden rounded-3xl bg-brand-800 px-6 py-14 text-center text-white shadow-[0_24px_50px_rgba(30,64,175,0.25)] sm:px-10">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {sections.cta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-brand-100">{sections.cta.subtitle}</p>
          <div className="mt-8">
            <Button to={sections.cta.buttonTo} variant="light" size="lg">
              {sections.cta.buttonLabel}
            </Button>
          </div>
        </MotionReveal>
      </section>
    </div>
  )
}

export default Services
