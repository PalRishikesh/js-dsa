
var gcdOfStrings = function(str1, str2) {
 
    // by adding two string before or after produce same output or not 
    if(str1 + str2 != str2 + str1){
        return "";
    }

    let a = str1.length;
    let b = str2.length;
    
    while(b){
        let temp = b;
        b = a % b;
        a = temp;
        console.log(" a % b: ", a % b);
        console.log("b, ",b);
        console.log("a, ",a);

    }
    console.log(str1,a);
    // Taking only starting repeating charcter in this case only two character
    return str1.substring(0,a)

};

console.log(gcdOfStrings("ABABAB","ABAB"));


// console.log(gcdOfStrings("LEET","CODE"));

// var gcdOfStrings = function(str1, str2) {
 
//     if(str1 + str2 != str2 + str1){
//         return "";
//     }

//     function gcd(a,b){
//         if(b.length === 0 ){
//             return a;
//         }
//         return gcd(b, a.slice(0, a.length % b.length))
//     }
//     return gcd(str1, str2)
// };


// Extra
// let a = "ABCABCABC";
// let b = "ABCABC";

// let result = a.slice(0, a.length % b.length);
// console.log(a.length % b.length);
// console.log(result);