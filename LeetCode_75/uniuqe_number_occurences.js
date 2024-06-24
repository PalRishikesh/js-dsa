var uniqueOccurrences = function(arr) {
    /*
    const countMap = new Map();
    for(let i=0; i< arr.length; i++){
        if(countMap.has(arr[i])){
            countMap.set(arr[i],countMap.get(arr[i])+1)
        }
        else{
            countMap.set(arr[i],1)
        }
    }
    console.log(countMap);
    const mapValue = [...countMap.values()];
    console.log(mapValue);
    let start = 0;
    let end = mapValue.length-1;

    while(start < end){
        if(mapValue[start] == mapValue[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
    */

    const countMap = new Map();
    for(const num of arr){
        countMap.set(num, (countMap.get(num) || 0)+1)
    }

    const countSet = new Set();

    for(const countValue of countMap.values()){
        if(countSet.has(countValue)){
            return false;
        }
        countSet.add(countValue);
    }

    return true;

};


const nums1 = [1,1,2,2,2]


console.log(uniqueOccurrences(nums1));