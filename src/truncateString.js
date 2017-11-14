function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(num >= str.length)
    return str; 
  if(num <= 3) {
    str = str.slice(0,num).concat("...");
  }else{
    str = str.slice(0, num - 3).concat("...");
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
