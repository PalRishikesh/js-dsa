let arr = [1, 7, 3, 8, 6,-4];

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    // console.log("leftArr: ",leftArr);
    // console.log("rightArr: ",rightArr);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    const sortedArr = [];

console.log("leftArr: ",leftArr);
console.log("rightArr: ",rightArr);

    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        }
        else{
            sortedArr.push(rightArr.shift());
        }
    }
    console.log("sortedArr: ",sortedArr);
    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort(arr))

// Big O = O(nLogn)