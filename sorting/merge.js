let arr = [1, 7, 1, 3, 8, 6,-4];



function mergeSort(arr){
    if(arr.length <=1 ){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr))
    
}

function merge(leftArr, rightArr){
    // console.log("----")
    console.log(leftArr, rightArr)
    // console.log("===")
    const sortedArr = [];
    while(((leftArr !=undefined) && leftArr.length) &&  ((rightArr !=undefined) && rightArr.length)){
        console.log(leftArr, rightArr)
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }
        else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSort(arr))