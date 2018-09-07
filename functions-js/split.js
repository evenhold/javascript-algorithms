/**
  * Split( separator, limit);
  * Split a string into an array of substrings.
  */

const str = 'How are you doing today?';

const arr = str.split('');
const arrWords = str.split(' ');
const arrLimit = str.split(' ', 3);

console.log(`Array of letters: ${arr}`);
console.log(`Array of words: ${arrWords}`);
console.log(`Array of words with Limit: ${arrLimit}`);
