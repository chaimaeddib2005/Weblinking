// ~/server/services/pageCache.js

export class PageCache {
  constructor() {
    this._cache = {}
    this._lastFetch = 0
    this._cacheDuration = 30 * 60 * 1000 // 30 minutes
  }

  async fetchAllPages() {
    const now = Date.now()
    if (this._cache && now - this._lastFetch < this._cacheDuration) {
      return this._cache
    }
    try {
      // Fetch from your Nitro cached API route instead of WordPress directly
      const pages = await $fetch('/api/pages')
      this._cache = pages
      this._lastFetch = now
      return pages
    } catch (error) {
      console.error('Error fetching pages from Nitro API:', error)
      throw error
    }
  }

  getPage(id) {
    return this._cache?.[id] || null
  }
}

export const pageCache = new PageCache()
