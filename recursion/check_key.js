let arr=[1,2,5,4,7,5,8,7,4,5,5,4,8,5,10]

function checkOccurance(arr, key){
    let count = 0;
    for(let i=0; i< arr.length; i++){
        if(arr[i] == key){
            count++;
        }
    }
    return count;
}

// console.log(checkOccurance(arr, 10));


function recursiveCheck(arr, key, index = 0){
    if(index == arr.length){
        return 0;
    }

    if(arr[index] == key){
        return 1+ recursiveCheck(arr,key, index + 1)
    }
    return 0 + recursiveCheck(arr,key, index + 1)
}

console.log(recursiveCheck(arr, 8));

