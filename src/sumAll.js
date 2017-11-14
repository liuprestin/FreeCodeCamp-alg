
function sumAll(arr) {
  // integration?
  // recall S = (n(n+1))/2
  // thus remove the first value
  
  // need to arrange variables for bounds
  var inner = (arr[0] < arr[1]) ? arr[0]: arr[1]; // the inner should be lower
  var outer = (arr[0] < arr[1]) ? arr[1]: arr[0]; // the outer should be higher
  
  return (((outer * (outer + 1))/2)- ((inner - 1)*(inner/2)));
}

s
