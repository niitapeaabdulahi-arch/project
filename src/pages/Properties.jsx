import { Hero, SearchBar, PropertyCard, MotionReveal } from '../components'
import { categories, searchFields, pageHeroes, pageSections } from '../data'
import usePropertyFilters from '../hooks/usePropertyFilters'

function Properties() {
  const hero = pageHeroes.properties
  const copy = pageSections.properties
  const {
    filters,
    filteredProperties,
    updateFilters,
    clearFilters,
    handleCategoryFilter,
  } = usePropertyFilters()

  return (
    <div className="bg-white">
      <Hero variant="page" eyebrow={hero.eyebrow} title={hero.title} subtitle={hero.subtitle} />

      <section className="section-padding mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SearchBar
          fields={searchFields}
          values={filters}
          onChange={updateFilters}
          onSubmit={updateFilters}
          submitLabel={copy.searchSubmitLabel}
        />

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => updateFilters({ ...filters, category: '' })}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                !filters.category
                  ? 'bg-brand-700 text-white shadow-[0_10px_24px_rgba(29,78,216,0.25)]'
                  : 'border border-brand-100 bg-white text-slate-700 hover:-translate-y-0.5 hover:bg-brand-50'
              }`}
            >
              {copy.allLabel}
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryFilter(category.slug)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                  filters.category === category.slug
                    ? 'bg-brand-700 text-white shadow-[0_10px_24px_rgba(29,78,216,0.25)]'
                    : 'border border-brand-100 bg-white text-slate-700 hover:-translate-y-0.5 hover:bg-brand-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {copy.clearFilters}
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          {copy.showingPrefix}{' '}
          <span className="font-semibold text-slate-800">{filteredProperties.length}</span>{' '}
          {copy.showingSuffix}
        </p>

        {filteredProperties.length > 0 ? (
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property, index) => (
              <MotionReveal key={property.id} delay={(index % 3) * 0.06}>
                <PropertyCard {...property} />
              </MotionReveal>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-brand-100 bg-brand-50 px-6 py-16 text-center">
            <h2 className="font-display text-3xl font-semibold text-slate-900">{copy.emptyTitle}</h2>
            <p className="mt-2 text-slate-600">{copy.emptySubtitle}</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
            >
              {copy.resetFilters}
            </button>
          </div>
        )}
      </section>
    </div>
  )
}

export default Properties
