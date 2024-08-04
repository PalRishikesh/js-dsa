// Array - Declartion
let arr1 = new Array();
// Or
let arr2 = [];

// we can store anything in array
let person = {
    name:'Rishiu',
    age:30
}

let arr3 = ['apple','shave','leeche:)',person]


//Access value
console.log(arr3[2]) // Accessing 3rd element with index as 2
console.log(arr3[3].name);


// Add and remove from array, 
// Add and remove at end of array respectively( push(10) and pop())
// Add and remove at begining of array respectively( shift(1) and unshift() )


// Loops
// for
for(let i=0; i< arr3.length; i++){
    console.log(arr3[i])
}

// while loop

let i=0;
while (i < arr3.length) {
    console.log(arr3[i])
    i++;
}