
let string = "mada";


function isPalindrom(string){
    if(string.length == 1){
        return true;
    }
    if(string[0] == string[string.length - 1]){
        return isPalindrom(string.substring(1, string.length - 1))
    }
    return false;
}

console.log(isPalindrom(string));