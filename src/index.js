/*!
 * @artdeco/typescript: TypeScript bug.
 *
 * Copyright (C) 2020  Art Deco Code Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { c } from 'erte'

/**
 * TypeScript bug.
 * @param {!_typescript.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
export default async function typescript(config = {}) {
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
