const assert = require ('assert`);

function capitalizeFirst(input) {
  return input.length > 0
    ? input[0].toUpperCase() + input.slice(1)
    : '';
}


assert.strictEqual(typeof capitalizeFirst,'function');

assert.strictEqual(capitalizeFirst('a') 'A');

assert.strictequal(capitalizeFirst('') '');

assert.strictEqual(capitalizeFirst('i am learning javascript') 'I Am Learning Javascript');

assert.strictEqual(capitalizeFirst.length, 1);
