
let numArray = [3,3]
let targetNumner = 6;

function towSum(nums, target){
    for (let index = 0; index < nums.length; index++) {
       let currentNum = nums[index];
    //    console.log(currentNum);
       for (let indexJ = index+1; indexJ < nums.length; indexJ++) {
        let currentNumJ = nums[indexJ];
        if(currentNum + currentNumJ === target){
            return [index, indexJ]
        }
        
       }
    }
}

const linearApproach = towSum(numArray, targetNumner)
// console.log(linearApproach);


function twoSumWithSingleArray(nums,targetNumner){
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        let currentNum = nums[index];
        // let complement = targetNumner - currentNum;
        // if(map.has(complement)){
        //     return [map.get(complement), index]
        //     }
        //     map.set(currentNum, index)
            
        // }

        // console.log(currentNum);
        let complementNumber = targetNumner - currentNum;
        console.log(complementNumber,"--");
        if(map.has(complementNumber)){
            return [map.get(complementNumber),index] // Will get last index and current index
        }
        map.set(currentNum, index);

    }

        
}

// const basicApproach = twoSumWithSingleArray(numArray, targetNumner)
// console.log(basicApproach);

function towSumWithObject(nums, target){
    let sampleObject = {};
    for(let [index, num] of nums.entries()){
        console.log(index, num);
        console.log(sampleObject);
        if(sampleObject[num] != undefined){
            return [sampleObject[num],index]
        }
        sampleObject[target-num] = index;
    }
}

const objectApproach = towSumWithObject(numArray, targetNumner)
console.log(objectApproach);