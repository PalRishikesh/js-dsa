function nonAdjectentHouse(nums, i=0, memo = {}){

    if(i in memo) return memo[i];

    if(i >= nums.length ) return 0;

    const skip = nonAdjectentHouse(nums, i+1, memo);
    const take = nums[i] + nonAdjectentHouse(nums, i+2, memo);

    memo[i] = Math.max(skip, take);
    
    return memo[i];

 }

 nums = [1,2,3,1]
 console.log(nonAdjectentHouse(nums));
