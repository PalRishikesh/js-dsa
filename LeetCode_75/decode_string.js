// let s = '309a';

// let currentNum = 0;
// for (const char of s) {
//     if(char >= '0' && char <='9'){
//         currentNum = currentNum *10 + (char -'0')
//     }
// }
// console.log(currentNum);


var decodeString = function(s) {
    let stack = [];
    let currentNum =0;
    let currentStr ='';

    for(const char of s){
        if(char >='0' && char<='9'){
            currentNum = currentNum * 10 + (char - '0')
        }
        else if(char === '['){
            stack.push(currentNum);
            stack.push(currentStr)
            //Reset
            currentNum = 0;
            currentStr = ''
        }
        else if(char ==']'){
            let prevStr= stack.pop(); // Empty string
            let repeatTime = stack.pop(); // Repated number
            currentStr = prevStr + currentStr.repeat(repeatTime);
        }
        else{
            currentStr +=char;
        }
    }
    return currentStr;
};




const life = true;
