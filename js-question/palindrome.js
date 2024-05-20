// Check palindrome with string


let str1 = "abcba";

// Reverse String 
const reverseCustomArray = (originalArray)=>{
    let arr = originalArray;
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex < rightIndex){
        let temp = arr[leftIndex]
        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp;

        //
        leftIndex++;
        rightIndex--;

    }
    // console.log(arr);
    return arr;
}
const isPalindrome=(stringParameter)=>{
    let stringArray = stringParameter.split("");
    let reverseArray = reverseCustomArray(stringArray)
    let reverString = reverseArray.join("");
    if(stringParameter === reverString){
        return true;
    }
    return false;

}

console.log(isPalindrome(str1));