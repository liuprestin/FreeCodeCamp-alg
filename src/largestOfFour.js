
function largestOfFour(arr) {
  // You can do this!
  return arr.map(function(dubArr) { //for each element replace the array with its largest number
    return dubArr.reduce(function(prev, curr){
      return (curr > prev) ? curr : prev;   
    });  
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
