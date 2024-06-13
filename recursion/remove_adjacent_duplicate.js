
/** Sample */
// let inputString ="aabcc";
// let i = 1;
// console.log(inputString.substring(0,i));
// console.log(inputString.substring(i+1));
// console.log(inputString.substring(0,i) + inputString.substring(i+1));

function removeAdjDup(inputString){
    let result = "";
    for(let i=0; i< inputString.length; i++){
        if(inputString[i] != inputString[i+1] || i == inputString.length -1){ // second is extra condition to check with length should not go 
            result += inputString[i];
        }
    }
    return result;
}

let inputString = "aabcc";
// console.log(removeAdjDup(inputString));


function recuriseRemoveAdjustDup(inputString){

    if(inputString.length <= 1){
        return inputString;
    }

    if(inputString[0] === inputString[1]){
        return recuriseRemoveAdjustDup(inputString.substring(1));
    }

    return inputString[0] + recuriseRemoveAdjustDup(inputString.substring(1)) // 2nd parameter taking char from 1 position till last char

}
console.log(recuriseRemoveAdjustDup(inputString));
