const assert = require('assert');
const utils = require('../utils');
const sleep = utils.sleep;

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe('#sleep()', function () {
  it('should return the delay', async function () {
    let ms = await sleep(1 * 1000);
  });
});

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});