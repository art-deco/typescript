const { Octopus } = require('./lib');

/**
 * Create a new octopus.
 * @param {Food} initialFood
 */
function makeOceanOctopus(initialFood) {
  const octopus = new Octopus('ocean')
  octopus.eat(initialFood)
  return octopus
}

/**
 * @typedef {import('./lib').Food} Food
 */

module.exports.makeOceanOctopus = makeOceanOctopus