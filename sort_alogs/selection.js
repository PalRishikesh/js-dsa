function selectionSort(arr){
    const n = arr.length;

    for(let i=0; i< n-1; i++){
        let minIndex = i;

        for(let j = i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== 1){
            [arr[i],arr[minIndex]]  = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

let arr = [5,2,1,4,86,9];

console.log(selectionSort(arr));