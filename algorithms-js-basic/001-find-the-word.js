/*
 * Find the longest
 * word in a string
 */


// Basic Solution

const findLongestWord = ( str ) => {
    // split():
    // Separa palabra o letra cuando encuentra ' '. (space)
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++){
        if ( words[i].length > maxLength ) {
            maxLength = words[i].length;
        }
        
    }
    return maxLength;
}
console.log('Basic Solution');
console.log(findLongestWord('The quick brow fox jumped over the lazy dog'));
console.log(findLongestWord('What if try a super-log word such as otorhinolaryngology'));



// Intermediate Solution:

const findLongestWordM = ( str ) => {
  return str.split(' ').reduce((x, y ) => Math.max(x, y.length), 0) ;
}

console.log('Intermediate Solution');
console.log(findLongestWordM('The quick brow fox jumped over the lazy dog'));
console.log(findLongestWordM('What if try a super-log word such as otorhinolaryngology'));


// Advanced solution
const findLongestWordA = ( str ) => {
    str = str.split(' ');

    if ( str.length == 1)  return str[0].length;

    if ( str[0].length >= str[1].length ) {
        str.splice(1,1);
        return findLongestWordA(str.join(' '));
    }

    if ( str[0].length <= str[1].length ) {
        return findLongestWordA(str.slice(1, str.length ).join(' '));
    }
    return str.length;
}


console.log('Advanced Solution');
console.log(findLongestWordA('The quick brow fox jumped over the lazy dog'));
console.log(findLongestWordA('What if try a super-log word such as otorhinolaryngology'));
