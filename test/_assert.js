const assert = require('assert');

describe('Assert', () => {
	it('assert(value[, message])',() => {
		assert(true);
	});
	it('assert.deepEqual(actual, expected[, message])', () => {
		const obj1 = { a: { b: 1 } };
		const obj2 = { a: { b: '1' } };
		assert.deepEqual(obj1, obj2);

	});
	it('assert.deepStrictEqual(actual, expected[, message])', () => {
		const obj1 = { a: { b: 1 } };
		const obj2 = { a: { b: 1 } };
		assert.deepStrictEqual(obj1, obj2);
	});
	it('assert.doesNotThrow(block[, error][, message])', () => {

	});
	it('assert.equal(actual, expected[, message])', () => {
		assert.equal(1,1);
		// assert.equal(1,2);
	})
	// it('assert.fail(actual, expected[, message[, operator[, stackStartFunction]]])', () => {
	// 	assert.fail(3, 2, 'error line', '>');
	// });
});