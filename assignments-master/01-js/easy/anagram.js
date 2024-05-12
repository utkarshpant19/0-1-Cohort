/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

let map = new Map();

 for(let i=0; i<str1.length; i++){

  map.set(str1[i], (map.get(str1[i]) +1) || 1);
 }

  for(let i=0; i<str2.length; i++){

    const char = str2[i];

    if(!map.has(char)){
      return false;
    }
    else{
      const value = map.get(char);
      map.set(char, value -1);

      if(map.get(char)  == 0){
        map.delete(char);
      }
    }
  }

  return map.size == 0;
}

console.log(isAnagram('listen','silent'));

module.exports = isAnagram;
