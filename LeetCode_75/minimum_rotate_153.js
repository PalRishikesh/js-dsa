var findMin = function(nums) {
    let left = 0;
    let right = nums.length -1;

    while(left < right){

        let middle = Math.floor((right + left) / 2);
        // console.log(nums[middle] );
        if(nums[middle] > nums[right]){
            // left = middle+1;
            left = middle + 1;
            
        }else{
            right = middle;
        }
       
    }
    return nums[left]
};


let nums = [11,13,15,17]

console.log(findMin(nums))