// Iterative

function isVowel(character){
    let lowerCharacter = character.toLowerCase();
    let vowel = "aeiou";
    if(vowel.indexOf(lowerCharacter) == -1){
        return false;
    }
    else{
        return true;
    }
}

function countVowelsItervative(string){
    let count = 0;
    for(let i=0; i< string.length; i++){
        if(isVowel(string[i])){
            count +=1;
        }
    }
    return count;
}

// console.log(countVowelsItervative("Hello How are you"));

/** Recursive approach */

function countVowelRecursive(string, stringlength){
    console.log(string,stringlength);
    if(stringlength == 1){
        return Number(isVowel(string[0]));
    }
    return countVowelRecursive(string, stringlength-1) + Number(isVowel(string[stringlength-1])) // isVowle function will return at the time of unwinding
}

let myString = "Hello";
console.log(countVowelRecursive(myString, myString.length));