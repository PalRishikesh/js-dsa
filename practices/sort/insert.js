let arr = [1, 7, 3, 8, 6];
function insertionSort(){
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i -1;
        while(j >=0 && arr[j] > numberToInsert){
            console.log(numberToInsert, j, arr[j])
            arr[j+1] = arr[j]
            j= j-1;
        }
        console.log("------")

        arr[j+1] = numberToInsert;
    }
}

insertionSort(arr)
console.log(arr);