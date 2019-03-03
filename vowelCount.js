// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// version Node v8.1.3


// SOLVED
// first attempt - FOR LOOP, .includes

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a','e', 'i', 'o', 'u']
  for (let i = 0; i<str.length; i++){
    if (vowels.includes(str.split('')[i])){
        vowelsCount++
    }
}
  return vowelsCount
}

// SOLVED




// .map FUNCTION 

function getCount(str){
    var vowelsCount = 0
    var vowels = ['a','e', 'i', 'o', 'u']

    return str.map()

}


// OTHER SOLUTIONS 

// USING .match 

function getCount(str) {
  return (str.match(/[aeiou]/ig)).length;
}

// calls .match to search for all variables then calls .length to return the number of the 
// returned array. Since the returned array will have pulled out all the vowels, because it is using
// the ig flag(i means it will ignore case, g is global which means it will capture all instances it finds)
// the length of this array will be equal to the number of vowels in the searched string.

// .match() works by using regex to match the condition and returns what it finds. 
// great when using simple regex

// breaks down like this: 'thing to search'.match(/[regex]/flag)



// using .filter

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}


// .filter will create a new array filled with all the index values which pass the test
// provided by the function

// in this case it checks if the string "aeiouAEIOU" includes the letter passed to the arrow
// function, if the list of vowels includes the letter passed to it, it is added to the array, and
// then at the end the length of the subsequent array is returned. 



