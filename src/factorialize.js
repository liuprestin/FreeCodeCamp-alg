function factorialize(num) {
  var value;
  //base case
  if (num == 0) return 1;
  
  value = factorialize(num-1)* (num);
  return value;
}

factorialize(5);
