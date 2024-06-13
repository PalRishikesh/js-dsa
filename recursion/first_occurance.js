
// Iterative
let arr = [3,4,1,8,1,7];

function firstOcc(arr, findMe, currIndex){
    while(currIndex < arr.length){
        if(findMe == arr[currIndex]){
            return currIndex;
        }
        currIndex +=1;
    }
    return -1;
}

// console.log(firstOcc(arr, 2, 0));


function recursiveFirstOc(arr, findMe, currIndex){
    if(arr.length == currIndex){
        return -1;
    }

    if(arr[currIndex] == findMe){
        return currIndex;
    }
    return recursiveFirstOc(arr, findMe, currIndex+1)
}

console.log(recursiveFirstOc(arr, 1, 0));