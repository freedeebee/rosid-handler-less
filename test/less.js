'use strict'

const assert = require('chai').assert
const less = require('./../src/less')

describe('less()', function() {

	it('should return an empty string when called with an empty LESS string', async function() {

		const input = ''
		const result = await less('.', input, { optimize: false })

		assert.strictEqual(result, input)

	})

	it('should return an error when called with incorrect LESS', async function() {

		const input = 'test'

		return less('.', input, { optimize: false }).then(() => {

			throw new Error('Returned without error')

		}, (err) => {

			assert.isNotNull(err)
			assert.isDefined(err)

		})

	})

	it('should return CSS with a source map when called with valid LESS', async function() {

		const input = '.test { color: black; }'
		const result = await less('.', input, { optimize: false })

		assert.isString(result)
		assert.include(result, 'sourceMappingURL')

	})

	it('should return CSS without a source map when called with valid LESS and optimization enabled', async function() {

		const input = '.test { color: black; }'
		const result = await less('.', input, { optimize: true })

		assert.isString(result)
		assert.notInclude(result, 'sourceMappingURL')

	})

})