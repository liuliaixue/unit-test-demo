var expect = require('expect.js');

describe('Expect', () => {
	// expect(window.r).to.be(undefined);
	it('preview', () => {
		expect({ a: 'b' }).to.eql({ a: 'b' })
		expect(5).to.be.a('number');
		expect([]).to.be.an('array');
		// expect(window).not.to.be.an(Image);
		expect(1).to.be(1)
	})
});