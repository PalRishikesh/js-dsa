/** Rotate Array by K */


let arr =[1,2,3,4,5,6,7]
let k = 3;
function rotateArray(num,k){
    
    let size = num.length;
    // to get value if greater than orignal size
    if( k > size){
        k = k % size;
    }

    const rotated = num.splice(size - k, size) // (7-3 = 4, 7) ie. [5,6,7] is deleted and store in variable

     num.unshift(...rotated); // [5,6,7] added at starting of array
     return num;
}

// console.log(rotateArray(arr,k))

// Time = O(n) 


function rotateArrayOptimised(num,k){
    
    let size = num.length;
    // to get value if greater than orignal size
    if( k > size){
        k = k % size;
    }
    // Eg. [1,2,3,4,5,6,7]
    reverse(num, 0, num.length -1); // [7,6,5,4,3,2,1], O(n)
    reverse(num, 0, k-1); // [5,6,7,4,3,2,1], O(K)
    reverse(num, k, num.length -1); // [5,6,7,1,2,3,4], O(n-k)
    return num;
}

function reverse(nums, left, right){
    while(left < right){
        const temp  = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
}

console.log(rotateArrayOptimised(arr,k))
// Time: OVerall O(n)
// Space : O(1)