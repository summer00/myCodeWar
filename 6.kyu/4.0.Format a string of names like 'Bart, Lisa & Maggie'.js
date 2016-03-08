// the best answer in solutions.
// http://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/solutions/javascript
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
