const { c } = require('../stdlib');

/**
 * TypeScript bug.
 * @param {!_typescript.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
async function typescript(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@artdeco/typescript called with %s', c(text, 'yellow'))
  return text
}

/* typal types/index.xml namespace */
/**
 * @typedef {_typescript.Config} Config `＠record` Options for the program.
 * @typedef {Object} _typescript.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */


module.exports = typescript