const sChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";

const reverseString = (str) => { 
  // Initialize left and right pointers
  let r = str.length - 1, l = 0; 

  // Traverse string from both ends until
  // 'l' and 'r'
  while (l < r) 
  { 
    // Ignore special characters
    if (sChars.includes(str[l])) 
      l++; 
    else if(sChars.includes(str[r])) 
      r--; 

    // Both str[l] and str[r] are not spacial
    else 
    { 
      let tmp = str[l]; 
      str[l] = str[r]; 
      str[r] = tmp; 
      l++; 
      r--; 
    } 
  } 
  return str;
};
