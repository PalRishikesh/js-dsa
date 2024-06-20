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


// console.log(reverseWords(string));


var reverseWordsNew = function(s) {
    let result = [];
    let length = s.length;

    let word= "";
    for (let index = 0; index < length; index++) {
        if(s[index] != " "){
            console.log(s[index]);
            word +=s[index];
        }
        else if(word.length > 0){
            result.unshift(word);
            word="";
        }
        
    }
    if(word.length > 0){
        result.unshift(word);
    }
    console.log(result);
    return result.join(" ");
}





console.log(reverseWordsNew(string));