function whatIsInAName(collection, source) {
  // for each propery - filter the collection for the property and return its object
  // the object is than put into the array
  var arr = collection.filter(function(ele){
    for (var prop in source){
      if (source[prop] != ele[prop]){
        return false;
      }
    }
    return true;
  });
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
