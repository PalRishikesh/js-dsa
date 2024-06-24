var longestOnes = function(nums, k) {
    
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;
    for(let right =0; right < nums.length; right++){
        console.log(nums[right]);
        if(nums[right] == 0){
            zeroCount++;
        }

        while(zeroCount > k){
            if(nums[left] == 0){
                zeroCount--;
            }
            // Alway more left pointer
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen;
};


console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));