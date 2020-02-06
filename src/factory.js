import { Octopus } from './lib'

/**
 * Create a new octopus.
 * @param {Food} initialFood
 */
export function makeOceanOctopus(initialFood) {
  const octopus = new Octopus('ocean')
  octopus.eat(initialFood)
  return octopus
}

/**
 * @typedef {import('./lib').Food} Food
 */