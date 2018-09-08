/**
  * Reverse a String:
  *
  */

// 1st Solution:

const reverseStr = ( str ) => {
    str = str.split('');
    str = str.reverse();
    str = str.join('');

    return str;
};


console.log(reverseStr('Hello world'));
console.log([1,2,3,4,6,7].reverse());
console.log('--------------------------------------');

// 2nd Solution

const reverseString = ( str ) => {
    let newStr = '';
    for ( let i = str.length - 1; i >= 0 ; i-- ) {
        newStr += str[i];
    }

    return newStr;
};

console.log(reverseString('Hello world'));
console.log(('Hello world')[0]);
console.log(('Hello world')[1]);
console.log(('Hello world')[2]);
console.log('--------------------------------------');


// 3rd Solution

const reverseStr3 = ( str ) => {
    let rev = '';
    str.split('');
    for (let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }

    return rev;
};

console.log(reverseStr3('Hello 3'));
console.log('--------------------------------------');


// 4th Solution
const reverseStr4 = ( str ) => {
    return str.split('').reverse('').join('');
};


console.log(reverseStr4('123456'));
console.log('--------------------------------------');
