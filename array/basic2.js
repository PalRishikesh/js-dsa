function findElement(arr,value){
    for (const singleValue of arr) {
        if(singleValue == value){
            return true;
        }
    }
    return false;
}

// console.log(findElement([1,2,3,4,9],90));
// console.log([1,2,3,5,6].includes(9));

const arr= [1,2,3,4,5,6,7,10,13,12,15,67,53,32];
// splice (i,d,a...),  use to add or delete the element from the array, original array will change
// console.log(arr.splice(3,2));
arr.splice(3,0,55,66)
console.log(arr);

// slice, give only return the sub array and will not change the original array, splice(i, n), n is exculed




