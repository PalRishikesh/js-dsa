

function breakAndMerge(array){
    if(array.length === 1){
        return array;
    }

    const middle = Math.floor(array.length/2);
    const left = array.slice(0,middle); // Middle will not included in left arr
    const right = array.slice(middle);

    return merge(breakAndMerge(left), breakAndMerge(right))


}

function merge(left, right){
    let result =[];
    let leftIndex = 0;
    let rightIndex = 0;

    while(left != undefined &&  right !=undefined && leftIndex < left && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(right[rightIndex])
            rightIndex++;
        }
    }
    return [...result];
}


let arr = [1,6,8,9,2,3,4,5];
console.log(breakAndMerge(arr));