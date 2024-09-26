// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once

function isAnagram(s,t){
    // Sort both the string in asscending order and compare two of them
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    console.log(s,t)
    return s === t;
}

// console.log(isAnagram("aaabc","bcaaa"));

function isAnagramOtimize(s,t){
    if(s.length !== t.length) return false;
    let obj1={}
    let obj2={}

    for(let i=0; i<s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) +1
        obj2[t[i]] = (obj2[t[i]] || 0) +1
    }

    for (const key in obj1) {
        if(obj1[key] != obj2[key]) return false;
    }
    return true;
}

// console.log(isAnagramOtimize("abcd","acda"));



function isAnagramOtimizeCustom(str1, str2){
    if(str1.length !== str1.length) return false;
    let obj1={};
    let obj2={};
    for (let index = 0; index < str1.length; index++) {
        obj1[str1[index]] = obj1[str1[index]] + 1 | 1
        obj2[str2[index]] = obj2[str2[index]] + 1 | 1
        
        
    }
    console.log(obj1)
    console.log(obj2)
    for(const key in obj1){
       console.log(obj1[key]);
       if(obj1[key] != obj2[key]) return false;
       
    }
    return true;
}

console.log(isAnagramOtimizeCustom("hello","ellha"))