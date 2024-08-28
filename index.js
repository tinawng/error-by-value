/**
 * @description Return error by value is the only way
 * @example
 * const { data: albums, error } = await $tryAsync(fetch("/albums"))
 * @param {Promise} promise
 * @returns {Promise<{ data: any|null, error: Error|null }>}
 */
export async function $tryAsync(promise) {
  try {
    return { data: await promise, error: null }
  } catch (error) {
    return { data: null, error }
  }
}

/**
 * @description Return error by value is the only way
 * @example
 * const { data: album, error } = $try(myFunction, "albums", "DaftPunk", 2001)
 * @param {Function} fct
 * @param {...any} args
 * @returns {{ data: any|null, error: Error|null }}
 */
export function $try(fct, ...args) {
  try {
    return { data: fct(...args), error: null }
  } catch (error) {
    return { data: null, error }
  }
}
