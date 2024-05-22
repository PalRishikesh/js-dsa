let arr1 = [1,2,3,4,5,2,4,5,4,5,8,2,4,2,2,5,2];
let singleMap = new Map();
let maxValue = 0;
let maxKey = 0;
for (let index = 0; index < arr1.length; index++) {
    if (!singleMap.has(arr1[index])) {

        singleMap.set(arr1[index],1);
    }
    else{
        // singleMap.set(arr1[index],singleMap.get(arr1[index])+1);
        singleMap.set(arr1[index],singleMap.get(arr1[index])+1);
    }
        
}

for(let [key, value ] of singleMap){
    // console.log(key, value);
    // if(singleMap.get(key))
        // console.log(singleMap.get(key))
    if(maxValue < singleMap.get(key)){
        maxValue = singleMap.get(key);
        maxKey = key; // Storing key
        maxValue = singleMap.get(key);
        if(maxValue < singleMap.get(maxKey)){
            // Checking with key again 
            maxKey = key;
        }
        
    }
    

}


console.log(maxValue);
console.log(maxKey);