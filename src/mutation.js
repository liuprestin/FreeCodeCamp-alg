function mutation(arr){
  var compared = arr[0].toLowerCase();
  var letterSrc = arr[1].toLowerCase();
  // disprove that a letter does not exist
  for (var i = 0; i < letterSrc.length; i++) {
    if( compared.indexOf(letterSrc[i]) < 0) { // the indexOf func returns -1 if not present
      return false;
    }
  }
 return true;
}
