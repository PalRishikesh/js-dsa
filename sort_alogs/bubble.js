function bubbleSort(array){
    let isSwap;

    do {
        
        isSwap = false;
        for (let i = 0; i < array.length; i++) {
           if(array[i] && array[i+1] && array[i] > array[i+1]){
            const temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            isSwap = true;
           } 
            
        }

    } while (isSwap);

    return array;
}

let arr = [4,2,3,6,1];

// console.log(bubbleSort(arr));



function simpleBubbleSort(array){
    for (let j = 0; j < array.length-1 ; j++) {
    for (let i = 0; i < array.length-1 ; i++) {
        if(array[i] > array[i+1]){
         const temp = array[i];
         array[i] = array[i+1];
         array[i+1] = temp;
        }   
     }  
    }
     return array;
}
console.log(simpleBubbleSort(arr));