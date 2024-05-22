let arr = [100, 7, 3, 8, 6];

// function bubbleSort(arr){
//     let isSwap = false;
//     for(let i=0; i< arr.length-1; i++){
//        if(arr[i] > arr[i+1]){
//         let temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//         isSwap = true;
//        }
//     }
//     if(isSwap == false){
//         return arr;
//     }
//     else{
//        return bubbleSort(arr)
//     }
// }

/** With Do while loop */

function bubbleSort(arr) {
  let isSwap = false;
  do {
    isSwap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwap = true;
      }
    }
  } while (isSwap);
}

bubbleSort(arr);
console.log(arr)
