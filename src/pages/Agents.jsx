import { Hero, SectionTitle, AgentCard, Button, MotionReveal } from '../components'
import { agents, pageHeroes, pageSections } from '../data'

function Agents() {
  const hero = pageHeroes.agents
  const sections = pageSections.agents

  return (
    <div className="bg-white">
      <Hero variant="page" eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.meet.eyebrow}
          title={sections.meet.title}
          subtitle={sections.meet.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => (
            <MotionReveal key={agent.id} delay={index * 0.08}>
              <AgentCard {...agent} />
            </MotionReveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-slate-600">{sections.cta.prompt}</p>
          <div className="mt-4">
            <Button to={sections.cta.buttonTo} variant="primary" size="lg">
              {sections.cta.buttonLabel}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Agents
