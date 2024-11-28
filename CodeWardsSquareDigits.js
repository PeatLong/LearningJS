function squareDigits(num){
  // Convert the number to a string
  let numStr = num.toString(); 

  // Split the string into an array of digits
  let digits = numStr.split('');

  // Square each digit
  let squaredDigits = digits.map(digit => Math.pow(parseInt(digit), 2)); 

  // Join the squared digits back into a string
  let squaredNumStr = squaredDigits.join('');

  // Convert the string back to a number
  let squaredNum = parseInt(squaredNumStr); 

  return squaredNum;
}
