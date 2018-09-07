/**
  * Reduce():
  * The reduce() method executes a reducer
    function (that you provide) on each member
    of the array resulting in a single output value.
    The reducer function is fed four parameters:

     - Accumulator (acc)
     - Current Value (current)
     - Current Index (currentIndex)
     - Source Array (arr)


     Optional: initValue.

     > reduce( (acc, cur, curIndex , arr) => {}, initValue);

     or default:

     > reduce(( acc , current ) => {}, initValue);
*/

const arr = [1,3,5,8,9,4];
const sumTotal = arr.reduce( (total, currentValue) => {
    return total + currentValue;
});

const sumInRank = arr.reduce( (total, currentValue, currentIndex ) => {
    if( currentIndex >= 3 && !isNaN(currentValue)) {
        return total + currentValue;
    }
    else {
        return 0;
    }
},200);
// OBS: 200 is position 0 in array.

console.log(arr);
console.log(`Sum Total: ${sumTotal}`);
console.log(`Sum with index > 3 and  added 200: ${sumInRank}`);
console.log(`33 isNaN?: ${isNaN(33)}`)
