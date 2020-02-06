/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _typescript = {}
/**
 * Options for the program.
 * @record
 */
_typescript.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_typescript.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_typescript.Config.prototype.text

/* typal types/api.xml externs */
/**
 * TypeScript bug.
 * @typedef {function(!_typescript.Config): !Promise<string>}
 */
_typescript.typescript
