
var maxVowels = function(s, k) {
    const vowelSet = new Set(['a','e','i','o','u']);

    let currentVowelCount = 0;
    let maxVowelCount = 0;


    // Initial window 
    for(let i=0; i < k; i++){
        if(vowelSet.has(s[i])){
            currentVowelCount++;
        }
    }   

    maxVowelCount = currentVowelCount;
    for(let i=k; i< s.length; i++){
         // Check current Index
         if(vowelSet.has(s[i])){
            currentVowelCount++;
        }
        // Remove first index
        if(vowelSet.has(s[i-k])){
            currentVowelCount--;
        }
      
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
    }
    return maxVowelCount;
};


const s = "abciiidef";
const k = 3;
console.log(maxVowels(s,k));