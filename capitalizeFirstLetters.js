const assert = require('assert');

function capitalizeFirst (input){
  return input.length > 0
    ? input.toLowerCase().split(' ').map(words => words[0].toUpperCase()+ words.slice(1)).join(' ')
    : '';
}

assert.strictEqual(typeof capitalizeFirst,'function');

assert.strictEqual(capitalizeFirst.length, 1);

assert.strictEqual(capitalizeFirst ('a'), 'A');

assert.strictEqual(capitalizeFirst (''), '');

assert.strictEqual(capitalizeFirst ('hello world'), 'Hello World');

assert.strictEqual(capitalizeFirst ('i am learning js'), 'I Am Learning Js'); 


