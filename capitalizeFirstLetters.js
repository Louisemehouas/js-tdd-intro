

function capitalizeFirst (input){
  return input.length > 0
    ? input.toLowerCase().split(' ').map(words => words[0].toUpperCase()+ words.slice(1)).join(' ')
    : '';
}


module.exports = capitalizeFirst;


