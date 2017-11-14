function dropElements(arr, func) {
  // Drop them elements.
  // cut front the array based on if the number passes the test function
  // use turnary to switch findIndex output to false if -1 
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}

dropElements([1, 2, 3, 9, 2], function(n) { return n > 2; });
