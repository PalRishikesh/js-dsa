nums = [-2,1,-3,4,-1,2,1,5,-5,4]

var maxSubArray = function(nums) {
    let max = nums[0]
    let sum = 0
    for (let index = 0; index < nums.length; index++) {
        const value = nums[index];
        sum += value
        if(sum > max){
            max = sum;
        }
        if(sum < 0){
            sum = 0;
        }

        
    }
    return max;
}

console.log(maxSubArray(nums));