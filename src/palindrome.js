function palindrome(str) {
  //split string and compare to the original - if true than can use it
  /*
  create string with no periods , spaces , - , _
  */
  
  var temp = str.replace(/[\W_]+/g,"").toLowerCase(); // use regex to remove alphanumeric characters , need to deal with upper/lower case
  
  var reverse = temp.split("").reverse().join(""); 
  
  
  if( reverse === temp)
    return true;
  else 
    return false;
}



palindrome("eye");
