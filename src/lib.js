/**
 * An ocean creature.
 */
export class Octopus {
  /**
   * @param {string} location
   */
  constructor(location) {
    this.location = location
  }
  /**
   * Eat some food.
   * @param {string} food What food to eat.
   */
  eat(food) {
    console.log(food)
  }
}

/**
 * @typedef {Object} Food
 * @prop {number} quantity
 * @prop {number} calories
 */