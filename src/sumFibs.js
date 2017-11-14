function sumFibs(num) {
  var curr = 1;
  var prev = 0; 
  var temp;
  var odds = 0;
  
  //loop through the sequence and only add odds
  while(curr <= num){
    if(curr % 2 !== 0) {
      odds += curr;
    }
    temp = curr + prev;
    prev = curr;
    curr = temp;
  } 

return odds;
}

sumFibs(4);
