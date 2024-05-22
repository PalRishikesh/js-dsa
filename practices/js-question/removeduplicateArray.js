let arr1 = [1,2,3,4,5,2,4,5,4,5,8,2,4,2,2,5,2];

function uniqueArray(arr){
    let unqiueArr = [];
    for(let i = 0; i < arr.length; i++){
        if(unqiueArr[arr[i]] === undefined){
            unqiueArr.push(arr[i]);
        }
    }
    return unqiueArr;
}


console.log(uniqueArray(arr1));