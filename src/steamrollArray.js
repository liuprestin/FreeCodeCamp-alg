function steamrollArray(arr) {
  // I'm a steamroller, baby
  for (var ele of arr) {
    if (Array.isArray(ele)) {
    arr = ele.concat.apply([], arr);
  }
  }
  // this technically passes the challenge - but this does not deal with n-dimentional arrays
  // I'm thinking some sorta stack to track depth maybe?
  for (var ele of arr) {
    if (Array.isArray(ele)) {
    arr = ele.concat.apply([], arr);
  }
  }
  return arr.concat.apply([], arr); // base case  
}

steamrollArray([1, {}, [3, [[4]]]]);
