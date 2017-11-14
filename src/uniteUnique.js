function uniteUnique(arr) {
  var args = [].slice.call(arguments);
  var flat = args.concat.apply([], args);
  
  return flat.filter(function(ele, pos) {
    return flat.indexOf(ele) == pos;
 });
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
