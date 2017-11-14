function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var baseArr;
  var testArr;
  
  //make sure to know which is the larger array
  if(arr1.length >= arr2.length) {
    baseArr = arr1;
    testArr = arr2;
  }else{
    baseArr = arr2;
    testArr = arr1;
  }

    //test each element in testArr towards baseArr
    for(var i = 0; i < baseArr.length; i++) {
      if( testArr.indexOf(baseArr[i]) === -1) {
      newArr.push(baseArr[i]);    
      } 
    }
  
  for(var x = 0; x < testArr.length; x++) {
      if( baseArr.indexOf(testArr[x]) === -1) {
      newArr.push(testArr[x]);    
      } 
    }
  
  
  return newArr;
}



diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
