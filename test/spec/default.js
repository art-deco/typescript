import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import typescript from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof typescript, 'function')
  },
  async 'calls package without error'() {
    await typescript()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await typescript({
      text,
    })
    ok(res, text)
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T