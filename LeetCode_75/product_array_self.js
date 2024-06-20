const nums = [1, 2, 3, 4];

// function allProduct(arr){
//     let productArray = [];
//     let singleProduct = 1;
//     for (let index = 0; index < arr.length; index++) {
//        singleProduct = singleProduct * arr[index];
//        productArray.push(singleProduct);
//     }
//     return productArray;
// }

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

console.log(productExceptSelf(nums));
