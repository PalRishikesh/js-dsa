/**
 * Convert both strings to lowercase to handle case insensitivity.
Remove any non-alphabetic characters from both strings.
Sort the characters in both strings.
Compare the sorted strings to check if they are equal.
 */




function isAnagrams(str1, str2){
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g,'');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g,'');
    console.log(cleanStr1)
    console.log(cleanStr2)
    
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
    console.log(sortedStr1);
    console.log(sortedStr2);

    return sortedStr1 == sortedStr2
}

console.log(isAnagrams('listeN8','silent'));