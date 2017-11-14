function pairElement(str) {
  dnaIn = str.split("");
  dnaMatched = [];
  for (var ele of dnaIn) {
    var basePair = [];
    if(ele === "T") { // Matches with A
      basePair[0] = "T";
      basePair[1] = "A";
      dnaMatched.push(basePair);
    }
    if(ele === "A") { // Matches with T
      basePair[0] = "A";
      basePair[1] = "T";
      dnaMatched.push(basePair);
    }
    if(ele === "G") { // Matches with C
      basePair[0] = "G";
      basePair[1] = "C";
      dnaMatched.push(basePair);
    }
    if(ele === "C") {// Matches with G
      basePair[0] = "C";
      basePair[1] = "G";
      dnaMatched.push(basePair);   
    }   
  }
  return dnaMatched;
}

pairElement("GCG");
