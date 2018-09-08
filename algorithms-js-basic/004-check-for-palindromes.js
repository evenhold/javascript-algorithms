/**
  * Check for Palindromes
  */

const palindrome = ( str ) =>{
    // Assign a front and back pointer.
    let front = 0;
    let back = str.length - 1;

    // Back and pront pointers won't always meet
    // in the middle, so use ( back > front )

    while ( back > front ) {
        // Increments front pointer if current
        // character doesn't meet criteria.
        while ( str[front].match(/[\W_]/)){
            front++;
            continue;
        }
        // Decrements back pointer if current character doesn't meet
        // criteria.

        while (str[back].match(/[\W_]/)){
            back--;
            continue;
        }
        // finally  do the comparison on the current character.
        if ( str[front].toLowerCase() !== str[back].toLowerCase()){
            return false;
        }

        front++;
        back--;
    }

    // If the whole string has been compared
    // whithout returning false, it's a palindrime.
    return true;
};

console.log(palindrome('eye'))
console.log(palindrome('eyes'));
