function convertToRoman(num) {
   // the letters and their value
  var letters = {M:1000,
                CM:900,
                D:500,
                CD:400,
                C:100,
                XC:90,
                L:50,
                XL:40,
                X:10,
                IX:9,
                V:5,
                IV:4,
                I:1
               };
  var numeral = "";
  // decement num as opposed to the Letter represented
  for (var index in letters ) {
    while ( num >= letters[index] ) {
      numeral += index; // append the letter 
      num -= letters[index]; // remove value
    }
  }
  return numeral;  
}

convertToRoman(36);
