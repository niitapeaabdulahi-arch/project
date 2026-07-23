import { Hero, SectionTitle, BlogCard, MotionReveal } from '../components'
import { blogs, pageHeroes, pageSections } from '../data'

function Blog() {
  const hero = pageHeroes.blog
  const sections = pageSections.blog

  return (
    <div className="bg-white">
      <Hero variant="page" eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.latest.eyebrow}
          title={sections.latest.title}
          subtitle={sections.latest.subtitle}
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <MotionReveal key={blog.id} delay={(index % 3) * 0.08}>
              <BlogCard {...blog} />
            </MotionReveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
