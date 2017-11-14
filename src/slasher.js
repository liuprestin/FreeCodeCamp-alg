function slasher(arr, howMany) {
  // it doesn't always pay to be first
  
  while (howMany !== 0) {
    arr.shift(); //remove from head
    howMany--;
  }
  return arr;
}

slasher([1, 2, 3], 2);
