
function truthCheck(collection, pre) {
  // Is everyone being true?
  // check if property pre is NOT null
  // use indexOF
  
  
  
  for (var ele of collection) {
    if ( !(Boolean(ele[pre]))) {return false;}
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
