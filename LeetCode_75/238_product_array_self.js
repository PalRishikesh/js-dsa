

// function allProduct(arr){
//     let productArray = [];
//     let singleProduct = 1;
//     for (let index = 0; index < arr.length; index++) {
//        singleProduct = singleProduct * arr[index];
//        productArray.push(singleProduct);
//     }
//     return productArray;
// }
// const nums = [1, 2, 3, 4];

// console.log(allProduct(nums));

// var productExceptSelf = function (nums) {
//   let returnArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     let singleProduct = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (i != j) {
//         singleProduct = singleProduct * nums[j];
//       }
//     }

//     returnArray.push(singleProduct);
//   }
//   return returnArray;
// };

// console.log(productExceptSelf(nums));


// var secondMethod = function (nums) {
//   let returnArray = [];
//   let allArrayProduct = 1;
//   for (let i = 0; i < nums.length; i++) {
    
//         allArrayProduct = allArrayProduct * nums[i];
      

//   }
//   for (let index = 0; index < nums.length; index++) {

//         let newValue = allArrayProduct  / nums[index];
//         returnArray.push(newValue)
//   }

//   return returnArray;
// };

// console.log(secondMethod(nums));

/*

var productExceptSelf = function (nums) {
    let length = nums.length;
    let left = new Array(length).fill(1);
    let right = new Array(length).fill(1);
    
    let answer = new Array(length);

    // Left side
    for(let i=1;i < length; i++){
        left[i] = left[i-1] * nums[i-1];
    }

    // Right Side
    for(let i = length - 2; i >=0; i--){
        right[i] = right[i+1] * nums[i+1];
    }
    console.log(left);
    console.log(right);
    
    // Merge7
    for(let i=0; i<length; i++){
        answer[i] = left[i] * right[i];
    }
    return answer;
}
    */

// console.log(productExceptSelf(nums));







// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]



var productExceptSelf = function (nums) {
    // Baisc approach, will not work for zero value
    
    // let productOfAll = 1;
    // let expectedArray=[];
    // for (const singleValue of nums) {
    //         productOfAll *= singleValue;
    // }
    // console.log(productOfAll);
    // for (const singleValue of nums) {
    //     expectedArray.push(productOfAll/singleValue);
    // }
    // console.log(expectedArray);


    let returnArry = [];
    let leftArray = new Array(nums.length).fill(1);
    let rightArray = new Array(nums.length).fill(1);

    for (let index = 0; index < nums.length-1; index++) {
        leftArray[index+1] = (leftArray[index] * nums[index]);
    }
    for (let index = nums.length-1; index > 0; index--) {
        rightArray[index-1] = (rightArray[index] * nums[index])
    }

    for (let index = 0; index < nums.length; index++) {
        returnArry[index] = (leftArray[index] * rightArray[index]);
    }

    return returnArry

}


console.log(productExceptSelf([-1,1,0,-3,3]));