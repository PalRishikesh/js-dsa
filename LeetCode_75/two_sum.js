var twoSum = function (nums, target) {
    // let obj = {};
    // for(let i=0; i< nums.length; i++){
    //     // Check the value after deducting from targe value and check in object
    //     const answer = target - nums[i];
    //     if(obj[answer] != undefined){
    //         return [obj[answer],i]
    //     }
    //     obj[nums[i]] = i;
    // }

    /**
     * 
     * Basic Approach
     */
    /*
    for(let i=0; i< nums.length; i++){
        for(let j=i+1; j< nums.length; j++){
            if(nums[i] + nums[j] == target){
                console.log(i,j);
                return [i,j]
            }
        }
    }
     */
    /**
     * Map approach
     */

    let map = new Map();
    for(let i=0; i< nums.length; i++){
        let targetPair  = target - nums[i];
        if(map.has(targetPair)){
            return [map.get(targetPair),i];
        }
        map.set(nums[i],i)
    }


}



let arr=[3,2,4];
let target = 6;
console.log(twoSum(arr,target));