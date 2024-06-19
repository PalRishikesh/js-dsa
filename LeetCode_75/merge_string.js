/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergeString = "";
    let i=0;
    let j=0;
    
    while( i < word1.length && j < word2.length){
        mergeString = mergeString + word1[i] + word2[j];
        i++, j++
    }

    while( j < word2.length){
        mergeString = mergeString + word2[j];
        j++;
    }

    while(i < word1.length){
        mergeString = mergeString + word1[i];
        i++
    }
    return mergeString;
};


//
const word1 = "abc";
const word2 = "defg";
console.log(mergeAlternately(word1, word2));
