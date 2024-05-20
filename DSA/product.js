nums = [1,2,3,4]

var productExceptSelf = function(nums) {
    const n = nums.length;
    const preFix = [];
    const postFix = [];
    const outPut= [];

    preFix[0] = nums[0];
    postFix[n-1] = nums[n-1]
    for(let i=1; i< n;i++){
        // console.log(nums[i]);
        preFix[i] = preFix[i-1] * nums[i];
    }
    for(let j= n -2; j >= 0; j--){
        // console.log(nums[j]);
        postFix[j] = postFix[j+1] * nums[j];
    }

    console.log(preFix)
    console.log(postFix)
    /**
     * First output array value is excluding first element itself that means all value from postfix except 0th element
 th element i.e: postFix[1]     */
 outPut[0] = postFix[1]
 /** Last value will be equal to prefix last second value same calcuation as above */
 outPut[n-1] = preFix[n-2];
 for(let i=1; i< n-1; i++){
    console.log(nums[i]);
    outPut[i] = preFix[i-1] * postFix[i+1]
 }


 return outPut;
}

console.log(productExceptSelf(nums))