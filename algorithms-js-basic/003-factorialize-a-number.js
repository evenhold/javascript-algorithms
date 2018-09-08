/**
  * Factorialize a Number.
  */



// 1st Solution

const factNumber = ( number ) => {
    let result = 1;
    for (let i = number ; i >  0; i-- ) {
        result *= i;
    }
    return result;
};


console.log(factNumber(0));
console.log(factNumber(1));
console.log(factNumber(5));
console.log(factNumber(6));
console.log(factNumber(7));
console.log('-------------------------');


// 2nd Solution

const factNumber2 = ( number ) => {
    if ( number == 0){
        return 1;
    }else{
        return number * factNumber2(number - 1);
    }
};

console.log(factNumber2(0));
console.log(factNumber2(1));
console.log(factNumber2(5));
console.log(factNumber2(6));
console.log(factNumber2(7));
console.log('-------------------------');



// 3rd Solution

const factNumber3 = ( number ) => {
    let i;
    for ( a = i; number >= 1; number--)  {
        i *=number;
    }
    return i;
};


console.log(factNumber3(0));
console.log(factNumber3(1));
console.log(factNumber3(5));
console.log(factNumber3(6));
console.log(factNumber3(7));
console.log('-------------------------');
