import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Hero,
  SearchBar,
  SectionTitle,
  PropertyCard,
  ServiceCard,
  AgentCard,
  TestimonialCard,
  CategoryCard,
  Stats,
  Newsletter,
  Button,
  MotionReveal,
} from '../components'
import {
  properties,
  categories,
  whyChooseUs,
  agents,
  testimonials,
  statistics,
  searchFields,
  heroContent,
  siteInfo,
  homeSections,
  newsletterContent,
} from '../data'

function Home() {
  const navigate = useNavigate()
  const [searchValues, setSearchValues] = useState({})

  const handleSearch = (values) => {
    const params = new URLSearchParams()

    Object.entries(values).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    navigate(`/properties?${params.toString()}`)
  }

  return (
    <div className="bg-white">
      <Hero
        brand={heroContent.brand || siteInfo.brand}
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        primaryCta={heroContent.primaryCta}
        secondaryCta={heroContent.secondaryCta}
        backgroundImage={heroContent.backgroundImage}
      />

      <section className="relative z-20 -mt-14 px-4 sm:-mt-16 sm:px-6 lg:px-8">
        <MotionReveal className="mx-auto max-w-5xl">
          <SearchBar
            fields={searchFields}
            values={searchValues}
            onChange={setSearchValues}
            onSubmit={handleSearch}
            submitLabel={homeSections.searchSubmitLabel}
          />
        </MotionReveal>
      </section>

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={homeSections.featured.eyebrow}
          title={homeSections.featured.title}
          subtitle={homeSections.featured.subtitle}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 3).map((property, index) => (
            <MotionReveal key={property.id} delay={index * 0.08}>
              <PropertyCard {...property} />
            </MotionReveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Button to={homeSections.featured.ctaTo} variant="outlineBlue" size="lg">
            {homeSections.featured.ctaLabel}
          </Button>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={homeSections.categories.eyebrow}
            title={homeSections.categories.title}
            subtitle={homeSections.categories.subtitle}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <MotionReveal key={category.id} delay={index * 0.06}>
                <CategoryCard {...category} countSuffix={homeSections.categories.countSuffix} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={homeSections.whyChooseUs.eyebrow}
          title={homeSections.whyChooseUs.title}
          subtitle={homeSections.whyChooseUs.subtitle}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <MotionReveal key={item.id} delay={index * 0.08}>
              <ServiceCard {...item} />
            </MotionReveal>
          ))}
        </div>
      </section>

      <Stats items={statistics} />

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={homeSections.agents.eyebrow}
          title={homeSections.agents.title}
          subtitle={homeSections.agents.subtitle}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => (
            <MotionReveal key={agent.id} delay={index * 0.08}>
              <AgentCard {...agent} />
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow={homeSections.testimonials.eyebrow}
            title={homeSections.testimonials.title}
            subtitle={homeSections.testimonials.subtitle}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <MotionReveal key={testimonial.id} delay={index * 0.08}>
                <TestimonialCard {...testimonial} />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter
        title={newsletterContent.title}
        subtitle={newsletterContent.subtitle}
        placeholder={newsletterContent.placeholder}
        buttonLabel={newsletterContent.buttonLabel}
      />
    </div>
  )
}

export default Home
