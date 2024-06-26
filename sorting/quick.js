let arr = [1, 7, 3, 8, 6,-4];

function quickSort(arr){

    if(arr.length < 2 ){
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    // console.log(left, right)
    return [...quickSort(left),pivot, ...quickSort(right)]
}


console.log(quickSort(arr))