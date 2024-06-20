

let nums = [2,1,0,6,4,6];


var increasingTriplet = function(nums) {
    // let small = Infinity;
    // let ssmall = Infinity;

    // for(let i= 0; i< nums.length; i++){
    //     if(nums[i] <= small){
    //         small = nums[i];
    //     }      
    //     else if(nums[i] <= ssmall){
    //         ssmall = nums[i];
    //     }
    //     else{
    //         return true;
    //     }
    // }

    // return false;

    let a = Infinity;b = Infinity, c = Infinity;
    // a: 1
    // b: 2
    // c 3
    for(let i=0;i<nums.length;i++){
     if(a>= nums[i]){
        a=nums[i];
     }
     else if(b>= nums[i]){
        b =nums[i];
     }
     else {
        return true;
     }
   }
   return false
};

 nums = [1,2,3]

console.log(increasingTriplet(nums));