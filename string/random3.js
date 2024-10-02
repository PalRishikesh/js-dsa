// 1. Find All Permutations of a String


function permute(str) {
    let newArray = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let newStr = "";

        // Traveling left to right skipping  current i value
        for (let j = 0; j < str.length; j++) {
            if (i == j) continue;
            newStr = newStr + str[j]
        }
        console.log(char + newStr);
        newArray.push(char + newStr)

        let char2 = str[i];
        let newStr2 = "";

        // Traveling right to left skipping  current i value
        for (let k = str.length - 1; k >= 0; k--) {
            if (i == k) continue;
            newStr2 = newStr2 + str[k]
        }
        console.log(char2 + newStr2);
        newArray.push(char2 + newStr2)

    }
    return newArray;
}

// console.log(permute("abcd")); // ["abc", "acb", "bac", "bca", "cab", "cba"]



function findPermutations2(str) {
    if (str.length == 1) {
        return [str];
    }

    let permutations = [];
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Remove the current character (str[i]) and find permutations of the remaining substring
        let remainingChars = str.slice(0,i)+ str.slice(i+1) // (o,i) get the value till ith from 0, (i+1) get all value from this index 
        
        // Recursively find the permutations of the remaining characters
        let remainingPermutations = findPermutations2(remainingChars);
            console.log(remainingPermutations);
        for (const permutation of remainingPermutations) {
                permutations.push(str[i]+permutation)
        }
            
        
        
    }
    return permutations;
}

const string = "abc";
// console.log(string.slice(0,1));
// console.log(string.slice(0+1) );

// console.log(findPermutations2(string));


// 2. Longest Palindromic Substring
function longestPalindrome(s) {
    let maxLength = 0, start = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }
    return s.substring(start, start + maxLength);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}


function longestPalindrome2(str){
    // console.log(str);
    let maxLength = 0, start = 0;
    for (let i = 0; i < str.length; i++) {
        let len1 = expandAroundCenter2(str,i,i)
        let len2 = expandAroundCenter2(str,i,i+1)
        console.log(len1, len2);
        

        let len = Math.max(len1, len2);
        if(len > maxLength){
            maxLength = len;
            start = i - Math.floor((len -1)/2)
        }
        
    }
    return str.substring(start, start+maxLength)
    
}
function expandAroundCenter2(s, left, right){
    // console.log(s, left, right)
    while(left >=0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }
    return right - left - 1;
}




// console.log(longestPalindrome2("abad")); // "bab" or "aba"

// Brute force approach
function longestPalindrome4(str){
    let largest = 1;
    let maxPalindrome=str[0];

    function getPalind(str){
        console.log(str.toString());
        
        let largestCount = str.length;
        let largestReverse =  str.split("").reverse().join("");
        if(largestReverse === str){
            if(largestCount > largest){
                largest = largestCount;
                maxPalindrome = largestReverse;

            }
        }
    }
    
    for (let i = 0; i < str.length; i++) {
        let outerString = str[i];
        let innerString ='';

            for (let j = i+1; j < str.length; j++) {
                console.log(outerString+str[j]);
                innerString +=str[j];
                getPalind(outerString+innerString)    
            }     
            
        return maxPalindrome;
    }
    return maxPalindrome;
}


// console.log(longestPalindrome4("ab")); // "bab" or "aba"
// 3. Group Anagrams

function groupAnagrams2(str){
        let obj={};
        for (const singleStr of str) {
            let sortedStr = singleStr.split('').sort().join('')
            console.log(sortedStr);
            if(obj[sortedStr] == undefined){
                obj[sortedStr]= [];
            }
            obj[sortedStr].push(singleStr)
            
        }
        console.log(obj);
        return Object.values(obj)
        
}

// console.log(groupAnagrams2(["eat","tea","tan","ate","nat","bat"]));

// 4. Minimum Window Substring
function minWindowOld(s, t) {
    let map = {};
    for (let char of t) {
        map[char] = (map[char] || 0) + 1;
    }
    console.log(map)
    let left = 0, right = 0, count = t.length, minLen = Infinity, minStart = 0;
    while (right < s.length) {
        if (map[s[right]] > 0) count--;
        map[s[right]]--;
        right++;
        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            map[s[left]]++;
            if (map[s[left]] > 0) count++;
            left++;
        }
    }
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}
// console.log(minWindowOld("ADOBECODEBANC", "ABC")); // "BANC"


function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";

    // Step 1: Create a frequency map for characters in t
    const tFreq = {};
    for (let char of t) {
        tFreq[char] = (tFreq[char] || 0) + 1;
    }

    let required = Object.keys(tFreq).length; // Number of unique characters in t to match
    let      = 0; // Number of characters currently matching

    const windowCounts = {}; // Track character frequencies in the current window
    let left = 0, right = 0; // Sliding window pointers
    let minLength = Infinity, minLeft = 0, minRight = 0; // Track the smallest window

    // Step 2: Expand the window with the right pointer
    while (right < s.length) {
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        // If the character in the window matches the frequency in t
        if (tFreq[char] && windowCounts[char] === tFreq[char]) {
            formed++;
        }

        // Step 3: Contract the window with the left pointer if we have a valid window
        while (left <= right && formed === required) {
            const char = s[left];

            // Update the minimum window
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
                minRight = right;
            }

            // Contract the window by removing characters from the left
            windowCounts[char]--;
            if (tFreq[char] && windowCounts[char] < tFreq[char]) {
                formed--;
            }

            left++; // Move the left pointer to shrink the window
        }

        right++; // Move the right pointer to expand the window
    }

    // Step 4: Return the minimum window found, or an empty string if no valid window
    return minLength === Infinity ? "" : s.substring(minLeft, minRight + 1);
}

// Example usage:
// const s = "ADOBECODEBANC";
// const t = "ABCN";
// console.log(minWindow(s, t)); // Output: "BANC"


function minWindowNew(s,t){
    if(s.length == 0 || t.length ==0 || t.length > s.length) return "";
    const obj={};
    for (const char of t) {
        obj[char] = (obj[char] || 0) + 1
    }
    console.log("o",obj);

    let requireLength = Object.keys(obj).length;
    let    
    
}


const s = "ADOBECODEBANC";
const t = "ABCN";
// console.log(minWindowNew(s, t)); // Output: "BANC"



// 8. Valid Parentheses

function isValidParentheses(str){
    let objParaentheses={
        "(":")",
        "[":"]",
        "{":"}"
    }
    
    for (let i = 0; i < str.length; i++) {
        // if(objParaentheses[str[i]] != undefined){
        //     // if(objParaentheses[str[i]] != str[i+1]){
        //     //     return false;
        //     // }

            
        // }
        // else{
        //     return false;
        // }

        if((str[i]=='(' && str[i+1]!=')') || (str[i]=='[' && str[i+1]!=']') || (str[i]=='{' && str[i+1]!='}') ) return false;
    }
    return true;
}

// console.log(isValidParentheses("()[]{")); 

// 9. Generate Parentheses

function generateParentheses(n) {
    let result = [];
    function backtrack(s = '', left = 0, right = 0) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        if (left < n) backtrack(s + '(', left + 1, right);
        if (right < left) backtrack(s + ')', left, right + 1);
    }
    backtrack();
    return result;
}
console.log(generateParentheses(3)); // ["((()))","(()())","(())()","()(())","()()()"]