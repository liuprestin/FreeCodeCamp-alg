function fearNotLetter(str) {
  //hmm its only one letter...
  // what if i did A reduction method?
  //return alphabet = "abcdefghijklmnopqrstuvwxyz".charCodeAt(0); // so the charcodes are in sequence
  //frist is to cut the ends ie. a to d -- so that would be slicing from locations of start and end
  // then filter (or diff) by the original test case
  // whats left should be the missing letters (though it may have multiple ranges)
  // this assumes str is sorted
  
  var start = str.charAt(0);
  var end = str.charAt(str.length - 1);
  
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var cut = alphabet.slice(alphabet.indexOf(start) ,alphabet.indexOf(end) + 1).split("");
  var letters = getDifference(str , cut);

  if (letters === "") {
    return undefined;
  }else {
    return letters;
  }
}
