
var moveZeroes = function(nums) {
    let writeIndex = 0;

    for(let readIndex = 0; readIndex < nums.length; readIndex++){
        if(nums[readIndex] != 0){
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    while(writeIndex < nums.length){
        nums[writeIndex] = 0;
        writeIndex++;

    }
};

 //https://www.youtube.com/watch?v=dVPzHCP4cy0
 var moveZeroes = function(nums) {
    let left =0
    let right =1
    while(right<nums.length){
     if(nums[left]!==0){
         left++
         right++
     }
     else if(nums[right]===0){
         right++
     }else{
         let temp = nums[right]
         nums[right] = nums[left]
         nums[left] = temp
     }
    }
 };