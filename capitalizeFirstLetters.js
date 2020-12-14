const assert = require('assert');

function capitalizeFirst(input) {
  return (input + '').charAt(0).toUpperCase() + input.substr(1);
}

assert.strictEqual(typeof capitalizeFirst,'function');

assert.strictEqual(capitalizeFirst.length, 1);

assert.strictEqual(capitalizeFirst ('a'), 'A');

assert.strictEqual(capitalizeFirst (''), '');

assert.strictEqual(capitalizeFirst ('learning javascript'), 'Learning javascript');

