import { Data } from '@/lib/types'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL

export const getPortfolioData = async () => {
  const res = await fetch(`${baseUrl}/api/portfolio`)
  const data: Data = await res.json()

  return data
}

export const getProjectBySlug = async (slug: string) => {
  const data = await getPortfolioData()

  const project = data.projects.find(item => item.slug === slug)
  return project
}
