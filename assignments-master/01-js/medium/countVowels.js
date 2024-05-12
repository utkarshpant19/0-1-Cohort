/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here 

    let count = 0;
    str = str.toLowerCase();

    for(let i=0; i<str.length; i++){

      const char = str[i];
      if(isVowel(char)){
        count++;
      }
    }

    return count;


}

function isVowel(char){
    
  switch(char){

    case 'a':
    return true;

    case 'e':
    return true;
    case 'i':
    return true;

    case 'o':
    return true;
    case 'u':
    return true;

    default:
    return false;
  }
}

console.log(countVowels('aEIOU'));

module.exports = countVowels;