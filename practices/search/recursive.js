let arr=[-5,2,4,6,7,10];

// function recursiveBinarySearch(arr, leftIndex, rightIndex, target){
//     let middleIndex = Math.floor((leftIndex + rightIndex)/2);
//     console.log(middleIndex);
    
//     if(target == arr[middleIndex]){
//         return middleIndex;
//     }
//     if(target < arr[middleIndex]){
//         rightIndex = middleIndex -1;
//     }
//     else{
//         leftIndex = middleIndex +1
//     }
//     recursiveBinarySearch(arr, leftIndex, rightIndex, target)
// }

// let leftIndex = 0;
// let rightIndex = arr.length - 1;

// console.log(recursiveBinarySearch(arr,leftIndex, rightIndex, 6))

function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(target == arr[middleIndex]){
        return middleIndex;
    }
    else if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex -1);
    }
    else{
        return search(arr, target, middleIndex+1, rightIndex);
    }
}

console.log(recursiveBinarySearch(arr,-50))