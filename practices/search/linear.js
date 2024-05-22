let arr=[-5,2,4,6,7,10];

function linearSearch(arr,target){
    let foundIdex = -1;
    for(let i=0;i<arr.length; i++){
        if(arr[i] == target){
            foundIdex = i;
        }
    }
    return foundIdex;
}


console.log(linearSearch(arr, 11))