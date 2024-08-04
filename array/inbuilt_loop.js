const numbers = [1,2,3,4,5];

// Map return the value in to new arrays

const newNumsMap = numbers.map((item, index, array)=>{
    // console.log(item, index, array);
        return item + 5;
    }
)
// console.log(newNumsMap)

// Filter check the condition in side array and return the value
const newNumsFilter = numbers.filter((item, index, array)=>{
    // console.log(item, index, array);
        return item > 3;
    })
// console.log(newNumsFilter);

// Reduce method, take array and reduce down to 1 value
const newNumsReuce = numbers.reduce((prevItem,curentItem, index, array)=>{
    // console.log(prevItem, curentItem,  index, array);
    return prevItem + curentItem

},0) // First value by default take 1st index
// console.log(newNumsReuce);


// Some is some what similar to filter, will retur either true of false, any value matcing condition 

const newNumsSome = numbers.some((item, index, array)=>{
    // console.log(item, index, array);
        return item > 4;
    })

// console.log(newNumsSome);

// every, check for all condition and retuen true or false
// Determines whether all the members of an array satisfy the specified test.
const newNumsEvery = numbers.every((item, index, array)=>{
    // console.log(item, index, array);
        return item > 4;
    })

// console.log(newNumsEvery);

// Find, Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const arrayFind = numbers.find((item, index)=>{
    return item > 2;
})
// console.log(arrayFind); // Return the index or undefined


// Spread and Rest Operator
// Spread
const num3 = [1,2,3]
const num4 = [4,5,6]

const finalNum = [...num3, ...num4];
// console.log(finalNum);

// Rest, take multiple single value and merge into single array
function sum(...number){
    return number
}

// console.log(sum(1,2,3,4));

// Contact, Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const newConcat = num3.concat(num4,numbers);
// console.log(newConcat);

let fruits = ['apple','shave','leeche:)','Orange','Grapes']
// Slice, start and end index, Exlude end value index
let someFruit = fruits.slice(0,1); // if slice() will return all value and -1 value from last indexing, will return value from last to -value means, -2 will return the last and 2nd last value 
// console.log(someFruit);

// Splice
//splice(start: number, deleteCount: number, ...items: string[]): string[]
const spliceValue = fruits.splice(1,2,"adding Mango") // Important, it will return the deleted value
// console.log(spliceValue); // Deleted value come here
// console.log(fruits); // Its new value added in original array


// fill, replace all its value with zero

fruits.fill(0, 2) // starting from 2nd index
// console.log(fruits); // [ 'apple', 'adding Mango', 0, 0 ]

// FindIndex
// const findIndexVal = num3.findIndex((item)=> item == 20);
// console.log(findIndexVal);// return index or -1


// Flat, remove inner value to outer array value

const numFlat = [[1,2,3],[4,5,6]]
const flatValue = numFlat.flat(2); // Provide the level of flat needed
// console.log(flatValue);

// Reverse, change the original array
flatValue.reverse();
// console.log(flatValue);

const unsorted = [5,2,10,1,4,6,3]

unsorted.sort((a,b) => a-b);
console.log(unsorted);
