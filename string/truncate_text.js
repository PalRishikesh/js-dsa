/** 1. Truncate text */
// Replace end of string with .. so the lenght matches the maximum lenght

function truncate(str,maxLength){
    if(str.length > maxLength){
        return str.slice(0, maxLength)+'...';
    }
    return str;
}

let str1="Hi,sir how are you doing now";
let str2 = "Good";
console.log(truncate(str2, 13));