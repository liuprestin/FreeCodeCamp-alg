function chunkArrayInGroups(arr, size) {
  var grouped = [];
  // Break it up.
  while (arr.length > 0) {
    grouped.push(arr.splice(0,size));
  }
  return grouped;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
