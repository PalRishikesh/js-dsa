const array = [1, 2, 3, 4, 5];
const k = 1;

function rotateArray(arr, k){
    const n  = arr.length;
    const rotatedArray = [];

    const rotationIndex = k % n;
    console.log(n,k,rotationIndex);
    // console.log(rotationIndex%n);
    for(let i=0; i < n;i++){
        console.log((i + rotationIndex)%n) // Roating indexing
        rotatedArray[(i + rotationIndex)%n] = arr[i]
    }
    return rotatedArray;
}


console.log(rotateArray(array, k))