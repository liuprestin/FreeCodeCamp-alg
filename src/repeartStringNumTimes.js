function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0) return ""; // to eliminate negatives
  
  var phrase = str; 
  for ( var i = 1 ; i < num; i++) {
    str = str.concat(phrase);
  }
  
  return str;
}

repeatStringNumTimes("abc", 3);
