var maxSubArray = function(nums) {

    let max = nums[0];
    let sum = 0;
    let maxIndexStart = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        sum += value;
        if(sum > max){
            max = sum;
            // maxIndexStart = i;
        }
        if(sum < 0){
            sum = 0;
        }
        else{
            
        }
    }
    console.log(max)
    console.log("maxIndexStart: ",maxIndexStart);
}



let arr = [-2,1,-3,4,-1,2,1,-5,4];

maxSubArray(arr)