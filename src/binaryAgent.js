function binaryAgent(str) {
  // validate that its 1's and 0's
  if(!(/[01 ]+/.test(str))) { return "invalid string";}
  
  var octets = str.split(" ");
  var decimals = [];
  
   // for each octet convert to decimal and then to character
  for (var ele of octets){   
    decimals.push(String.fromCharCode(parseInt(ele, 2)));   
  }
  // for each decmal code - convert to utf letter
  
  return decimals.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
