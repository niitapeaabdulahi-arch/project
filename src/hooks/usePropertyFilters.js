// Filter properties and keep URL search params in sync

import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { properties } from '../data'

function usePropertyFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    category: searchParams.get('category') || '',
    status: searchParams.get('status') || '',
  })

  useEffect(() => {
    setFilters({
      location: searchParams.get('location') || '',
      category: searchParams.get('category') || '',
      status: searchParams.get('status') || '',
    })
  }, [searchParams])

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesLocation =
        !filters.location ||
        property.location.toLowerCase().includes(filters.location.toLowerCase()) ||
        property.title.toLowerCase().includes(filters.location.toLowerCase())

      const matchesCategory = !filters.category || property.category === filters.category
      const matchesStatus = !filters.status || property.status === filters.status

      return matchesLocation && matchesCategory && matchesStatus
    })
  }, [filters])

  const updateFilters = (nextFilters) => {
    setFilters(nextFilters)

    const params = new URLSearchParams()
    Object.entries(nextFilters).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    setSearchParams(params)
  }

  const clearFilters = () => {
    updateFilters({ location: '', category: '', status: '' })
  }

  const handleCategoryFilter = (slug) => {
    updateFilters({
      ...filters,
      category: filters.category === slug ? '' : slug,
    })
  }

  return {
    filters,
    filteredProperties,
    updateFilters,
    clearFilters,
    handleCategoryFilter,
  }
}

export default usePropertyFilters
