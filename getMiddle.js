// You are going to be given a word. Your job is to return the 
// middle character of the word. If the word's length is odd, 
// return the middle character. If the word's length is even, 
// return the middle 2 characters.



// SOLUTION

// USING TERNARY OPERATORS

function getMiddle(s)
{
s = s.split('')
return (s.length%2 !==0) ? s[Math.floor(s.length/2)] : s[(s.length/2)-1]+s[(s.length/2)]
}

console.log(getMiddle('middlemat'))

// SOLUTION


// using .substr(), TERNARY OPERATORS

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// THIS SOLUTION USES ROUNDING TO GET THE MIDDLE INDEX, THEN USES SUBSTRING AND A CONDITIONAL
// TO DETERMINE IF THAT SUBSTRING WILL BE ONE OR TWO CHARACTERS LONG 


// .substr() extracts part of a string, it takes two arguments. (start, length)

// start indicates the index where the substring will be started 
// and length indicates how many characters will be extracted ie 1, 
// one character, 0, returns an empty string. 
// Negative numbers WILL PRODUCE AN EMPTY STRING


s