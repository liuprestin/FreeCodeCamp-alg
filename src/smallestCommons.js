
function smallestCommons(arr) {    
   // grab values from the array 
  var min = Math.min.apply( Math, arr );
  var max = Math.max.apply( Math, arr );
  
  var multiple = min;
  
  range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
  });

    return multiple;
}

// greatest Common multiple 
function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }
// least common muiltiple
function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

// for numbers between lowest and highest value
function range(min, max) {
        var arr = [];
        for (var i = min; i <= max; i++) {
            arr.push(i);
        }
        return arr;
    }


smallestCommons([1,5]);
