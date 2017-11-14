function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var noSpaces = str.replace(/\s+/g, '') // remove spaces for this test
  var wordEnd = noSpaces.substring( noSpaces.length - target.length ,noSpaces.length); // return last word 
  
  if (wordEnd === target)
    return true;
  else
    return false;
}

confirmEnding("Bastian", "n");
