const test = require('ava');

const {beforeEach, afterEach} = require('./helpers');

test.beforeEach(beforeEach);
test.afterEach(afterEach);

test('sets a default name', t => {
  t.pass()
});
