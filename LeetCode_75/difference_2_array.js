
// var findDifference = function(nums1, nums2) {
//     let newNum1=new Set();
//     let newNum2=new Set();

//     for(let i=0; i< nums1.length; i++){
//         if(nums2.indexOf(nums1[i]) == -1){
//             newNum1.add(nums1[i])
//         }
//     }
//     for(let i=0; i< nums2.length; i++){
//         if(nums1.indexOf(nums2[i]) == -1){
//             newNum2.add(nums2[i])
//         }
//     }
//     return [[...newNum1],[...newNum2]]
// };




var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const unique1 = [...set1].filter((setOneSingleValue) => !set2.has(setOneSingleValue));
    const unique2 = [...set2].filter((setTwoSingleValue) => !set1.has(setTwoSingleValue));
    
    return [unique1, unique2]
};


const nums1 = [1,2,3,3];
const nums2 = [1,1,2,2]

console.log(findDifference(nums1,nums2));