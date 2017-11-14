function sumPrimes(num) {
if (num > 1) { //recursively sum
  return checkPrime(num) + sumPrimes(num - 1);
 }
  else  {//base case
    return 0;
  }   
}

function checkPrime(num){
   // check if prime
   for(var i = 2; i < num; i++)
      if(num % i === 0) {return 0;} //if false
   return num; // if true
}

sumPrimes(10);
