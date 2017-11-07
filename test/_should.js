var should = require('should');

describe('Should', () => {
	// expect(window.r).to.be(undefined);
	it('preview', () => {
		var num = 1;
		num.should.be.exactly(1);

		var user = {
			name: 'tj'
			, pets: ['tobi', 'loki', 'jane', 'bandit']
		};

		user.should.have.property('name', 'tj');
		user.should.have.property('pets').with.lengthOf(4);
	})
});