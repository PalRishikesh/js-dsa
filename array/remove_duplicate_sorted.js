// Remove by in-place, relative order of the element shold be kept

// Brute Force
let arr1 = [0,0,2,2,3,3,3,4,5,6,6,6]

function removeDuplicate(arr){

    for(let i=0; i< arr.length -1; i++){ // O(n)
        if(arr[i] == arr[i+1]){
            arr.splice(i+1,1); // O(1)
            i--;
        }
    }
    return arr.length
}

// console.log(removeDuplicate(arr1));


function removeDuplicatePointer(arr){

    let i=0;
    for(let j=0; j< arr.length-1; j++){ 
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(removeDuplicatePointer(arr1));
// Time : O(n), O(1)