'use strict'

const util = require('util')
const less = require('less')

/**
 * Transform LESS to CSS.
 * @public
 * @param {String} folderPath - Path to the folder containing the LESS file.
 * @param {String} str - LESS.
 * @param {Object} opts - Optional options for the task.
 * @returns {Promise<String>} CSS.
 */
module.exports = async function(folderPath, str, opts) {

	// LESS can't handle empty files
	if (str === '') return str

	// Dismiss sourceMap when output should be optimized
	const sourceMap = opts.optimize !== true

	const result = await less.render(str, {
		paths: [folderPath],
		sourceMap: {
			sourceMapFileInline: sourceMap,
		}
	})

	return result.css

}