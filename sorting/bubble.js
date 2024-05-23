let arr=[-5,2,4,6,7,10];

function bubbleSort(arr){
    for(let i=0; i< arr.length; i++){
        let isSwapped = false;
        for(let j = 0; j< arr.length - (i+1) ; j++){
            console.log(j);
            // The condition (1+i) ensures that the inner loop doesn’t need to check the already sorted portion of the array in subsequent iterations.
            if(arr[j] > arr[j+1]){
                let temp  = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false){
            break
        }
    }
}

bubbleSort(arr);
console.log(arr);

