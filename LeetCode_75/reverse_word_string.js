const string = "the sky is    blue";


var reverseWords = function(s) {
    let sArray = s.split(" ");
    let reverseSting = "";
    console.log(sArray);

    for (let index = sArray.length - 1 ; index >= 0; index--) {
        if(sArray[index] !== '' ){
            reverseSting = reverseSting + ' '+ sArray[index];
        }
        
    }
    return reverseSting.trim();

}


console.log(reverseWords(string));