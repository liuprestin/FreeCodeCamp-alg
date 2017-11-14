function myReplace(str, before, after) {
  var arr = str.split(" "); // get an array of words
  var occurance = [];
  
  // need to preserve case ugh...
  if(/^[A-Z]/.test( before)) {
    //replace first letter with upper case
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } 
  else {
    //replace first letter with lower case
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  
  // find all occurances

  var index = arr.indexOf(before);
  while (index != -1) {
  occurance.push(index);
  index = arr.indexOf(before, index + 1);
  }
  // replace all occurances
  for (var i = 0; i < occurance.length; i++) {
    arr[occurance[i]] = after;
  }
  
  return arr.join(" "); //put the words back together
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
