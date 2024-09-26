
function isPalindrome(x){
    if(x < 0) return false
    return x === +x.toString().split("").reverse().join("")
}

// console.log(isPalindrome(-11211))


// ignoring spaces, punctuation, and capitalization

function isPalindromeString(str){
    console.log(str)
    // Remove non-alphanumeric characters and convert to lowercase
    const clearString = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    const reverseString =  clearString.split("").reverse().join("");
    return clearString == reverseString;
     
}

const input = "A man, a plan, a canal, .Panama";
// console.log(isPalindromeString(input));



