
function addTogether() {
  var args = [].slice.call(arguments);

  if (!args.every(function(val){return Number.isInteger(val);})) { //the array needs to be full of numbers
    return undefined;
  }

  if (args.length >= 2) {
        return args[0] + args[1];
  
  }else { // there is only 1 element 
       return function(num){
                if( !Number.isInteger(num)){
                  return undefined;
                }else{
                  return args[0] + num;
                }
            };

  }
  
}

addTogether(2)(3);
