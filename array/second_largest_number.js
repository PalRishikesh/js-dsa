/** Q. Find Second Largest Number */

/** Brute force */

let arr1 = [12,35,1,10,34,39];
let arr2 = [10,2,2,10,10]
function secondLargest(arr){
    const uniqueSet = new Set(arr);
    // Converting from iterable object to array
    const uniqueArr = Array.from(uniqueSet)
    uniqueArr.sort((a,b)=> b-a)
    if(uniqueArr.length >= 2){
        return uniqueArr[1];
    }
    else return -1


}

// console.log(secondLargest(arr1));
// Time Comlexity = O(nlogn) which is greater than O(n)


/** Optimised Approach */
function secondLargestOptimised(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    
    for (let index = 0; index < arr.length; index++) {
        const currentValue = arr[index];
        if(largest > currentValue){
            secondLargest = largest
            largest = currentValue
        }
        else if(largest != currentValue && secondLargest > currentValue) // largest value compare, so that it work on distinc value also.
        {
            secondLargest = currentValue;
        }
        
    }
    return secondLargest;
}

// console.log(secondLargest(arr2));
// Time complexity = O(n), Space : O(1)