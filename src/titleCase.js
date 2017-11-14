
function titleCase(str) {
  var words = str.toLowerCase().split(" "); //put everything to lowerCase
  
  var capWords = words.map(function(ele){ //so for every first letter of word want capitalize it
     return ele.charAt(0).toUpperCase() + ele.slice(1);
  });
  
  str = capWords.join(" "); //join back by spaces
  
  return str;
}



titleCase("I'm a little tea pot");
