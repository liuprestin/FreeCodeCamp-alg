function convertHTML(str) {
  // &colon;&rpar;
  
  var replaceTable = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '\"' : '&quot;',
    "\'" : '&apos;'
    
  };    
      
  var converted = str.split("").map(function(ele){
    return replaceTable[ele] || ele;   
  }).join("");
  
  return converted;
}


convertHTML("Hamburgers < Pizza < Tacos");
