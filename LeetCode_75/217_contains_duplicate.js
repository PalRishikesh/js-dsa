var containsDuplicate = function(nums) {
    const mySet = new Set(nums);
    return mySet.size == nums.length;
}
let nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));