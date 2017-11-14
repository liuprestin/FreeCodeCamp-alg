function findLongestWord(str) {
  var counter = 0;
  var list = str.split(" "); //split the string into words
  
  for (var ele of list) {
    if (ele.split("").length > counter)  // split the word into letters
      counter = ele.split("").length; // save length of longest word
  }
  
  return counter;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
