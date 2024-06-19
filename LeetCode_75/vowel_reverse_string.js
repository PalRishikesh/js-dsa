/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['A','I','O','E','U','a','e','i','o','u'];

    const arr = s.split("");
    let start = 0;
    let end = arr.length - 1;
    // console.log(vowels.includes(arr[end]));
    while(start < end){
        
        if(vowels.includes(arr[start]) && vowels.includes(arr[end])){

            let temp = arr[end];
            arr[end] = arr[start];
            arr[start] = temp;
            start++;
            end--;
        }
        else if(!vowels.includes(arr[start])){
            console.log(arr[start]);
            start++;
            
        }
        else
        // (!vowels.includes(arr[end])) // Here no need for else condition anyway will run if abot two aren't match
        {
            console.log("e : ",arr[end]);

            end--;
           
        }
    }
    return arr.join("");
};


const s = "leetcode"


console.log(reverseVowels(s));