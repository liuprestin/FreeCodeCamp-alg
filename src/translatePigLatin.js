function translatePigLatin(str) {
  // test if costanant or vowel
  // then do the translation respectively
  
  if (/[aeiou]/.test(str[0])){
    //we know there's a vowel
    return str.concat("way"); // we just add to the end
  }else {
    // we know there's a consonant
    // need to rotate by 1 letter
   
    //sigh need to deal with clusters - so we need to count constanents until there's 
    
    var arr = str.split("");
    var consonants = [];

  for (i = 0; i < arr.length; i++){
    if( !(/[aeiou]/.test(str[i])) ) { //test for vowels
       consonants.push(arr[0]);
       arr = arr.slice(consonants.length);
     } else {
       break;
     }
    }
    //fix it into a string
    consonants = consonants.join("");
