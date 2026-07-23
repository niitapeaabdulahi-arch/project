import { Hero, SectionTitle, Stats, AgentCard, MotionReveal } from '../components'
import {
  statistics,
  agents,
  aboutContent,
  aboutPoints,
  pageHeroes,
  pageSections,
} from '../data'

function About() {
  const hero = pageHeroes.about
  const sections = pageSections.about

  return (
    <div className="bg-white">
      <Hero variant="page" eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <MotionReveal className="overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(30,64,175,0.12)]">
            <img
              src={aboutContent.storyImage}
              alt={aboutContent.storyTitle}
              className="h-80 w-full object-cover transition duration-700 hover:scale-105 sm:h-[30rem]"
            />
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <p className="text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">
              {sections.journeyEyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
              {aboutContent.storyTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {aboutContent.story}
            </p>
          </MotionReveal>
        </div>
      </section>

      <section className="section-padding bg-brand-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <MotionReveal className="card-surface p-8">
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                {aboutContent.mission.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {aboutContent.mission.text}
              </p>
            </MotionReveal>
            <MotionReveal delay={0.08} className="card-surface p-8">
              <h2 className="font-display text-3xl font-semibold text-slate-900">
                {aboutContent.vision.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {aboutContent.vision.text}
              </p>
            </MotionReveal>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {aboutPoints.map((point, index) => (
              <MotionReveal key={point.title} delay={index * 0.08} className="card-surface p-7">
                <h3 className="font-display text-2xl font-semibold text-slate-900">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.text}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <Stats items={statistics} />

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.team.eyebrow}
          title={sections.team.title}
          subtitle={sections.team.subtitle}
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => (
            <MotionReveal key={agent.id} delay={index * 0.08}>
              <AgentCard {...agent} />
            </MotionReveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
