var td = require('testdouble');
const assert = require('assert');

var user = {
	name: 'alan',
	age: 998,
	save: td.function(),
};
td.when(user.save()).thenReturn(user);

describe('Test double', () => {
	it('function', () => {

		let savedUser = user.save();
		assert.equal(savedUser.name, user.name);
		assert.equal(savedUser.age, user.age);
	})
})