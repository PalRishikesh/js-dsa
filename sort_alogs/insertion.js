
function insertionSort(arr){
    // Start from second position

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

let arr = [1,6,8,9,2,3,4,5];
console.log(insertionSort(arr));