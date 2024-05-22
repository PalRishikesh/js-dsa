// let arr=[-5,2,4,6,7,10];
let arr=[1,2,3,5,6];

function binearySearch(arr,target){
    arr = arr.sort((a,b)=>a-b);
    
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(target === arr[middleIndex]){
            return middleIndex;
        }
        else if(target > arr[middleIndex]){
            leftIndex = middleIndex + 1;
        }
        else{
            rightIndex = middleIndex - 1;
        }
    }
    return -1;
}

// console.log(binearySearch(arr,2));
console.log(binearySearch(arr,60));
