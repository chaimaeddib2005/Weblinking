// ~/server/api/pages.ts

export default defineEventHandler(async (event) => {
  const cache = useCache()
  const cacheKey = 'wp-pages-cache'

  // Try Nitro cache first
  const cached = await cache.get(cacheKey)
  if (cached) {
    return cached
  }

  const pageIds = [5737,5817,5833,5911,5835,5831,5823,5839,5827,5908,5906,5821,5819,5837,5825,5811,5813,5815,5789,5829]

  const pages = await Promise.all(
    pageIds.map(id =>
      $fetch(`https://web.weblinking.fr/wp-json/wp/v2/pages/${id}`).then(data => ({ id, data })).catch(() => ({ id, data: null }))
    )
  )

  const result = pages.reduce((acc, { id, data }) => {
    if (data) acc[id] = data
    return acc
  }, {})

  // Cache for 30 minutes (1800 seconds)
  await cache.set(cacheKey, result, 60 * 30)

  return result
})
