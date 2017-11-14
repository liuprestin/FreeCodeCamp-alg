function rot13(str) { // LBH QVQ VG!
  // shift existing element (characters) 13  places - looping back;
  
  return (str + '')
    .replace(/[a-z]/gi, function (val) {
      return String.fromCharCode(val.charCodeAt(0) + (val.toLowerCase() < 'n' ? 13 : -13));
    });
}

// Change the inputs below to test
rot13("SERR PBQR PNZC! YES");
