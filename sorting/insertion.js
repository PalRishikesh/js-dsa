let arr=[2,4,6,1,7,10,-5];

function insertionSort(arr){
    for(let i = 0;i < arr.length; i++){
        let temp = arr[i];
        let j= i-1;
        for(; j >= 0; j--){
            // console.log(arr[j], temp)
            if(arr[j] > temp){
                // console.log("changes")
                // console.log(j+1, j)
                arr[j+1] = arr[j]; // Shifting
            }
            else{
                break;
            }
        }
        arr[j+1] = temp;
    }
}

// insertionSort(arr);
// console.log(arr);


function insertionSortWhile(arr){
    for(let i = 1; i< arr.length; i++){
        let numberToInsert = arr[i];
        let j = i-1;
        while( j >=0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
             j = j-1;
        }
        arr[j+1] = numberToInsert;

    }
}


insertionSortWhile(arr);
console.log(arr);

