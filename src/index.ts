/**
 * Get the last part of a URL path (slug)
 *
 * @param pattern The string/character to use (default: '/')
 * @param range Distance past `pattern` (default: 1)
 * @returns The slug of the URL path
 */
const getURLSlug = (pattern: string = '/', range: number = 1): string =>
  window.location.href.substring(
    window.location.href.lastIndexOf(pattern) + range
  )

export default getURLSlug
