function getIndexToIns(arr, num) {
  
  var SortedArr = arr.concat(num).sort(function(a , b){
    return a - b;
  }); // compare functions by value

  var index = 0;
  //now find the index where the number has been placed
  for (index ; index < SortedArr.length; index++) {
    if (SortedArr[index] === num) {
      return index;
    }
  }
  // Find my place in this sorted array.
  return 0;
}

getIndexToIns([2, 20, 10], 19);
