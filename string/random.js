// Check if a string contains only digits.
function isNumeric(str) {

    const result = /^\d+$/.test(str);
    // return result;

    return !isNaN(str)
}

let str = "1111";
// console.log(isNumeric(str));


// Count the number of vowels in a string.
function countVowels(str) {
    console.log(str)
    // Google for /gi
    const matches = str.match(/[aeiou]/g)
    return matches ? matches.length : 0
}
const stringVowels = "hell";
// console.log(countVowels(stringVowels))

// Reverse a string without using built-in methods
function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse;
}
// console.log(reverseString("hello"))


// Find the longest word in a string

function longestWord(str) {
    const strArr = str.split(" ");
    // console.log(strArr)
    let largestWordCount = 0;
    for (let index = 0; index < strArr.length; index++) {
        largestWordCount = Math.max(largestWordCount, strArr[index].length)

    }
    return largestWordCount
}

// console.log(longestWord("This is the longest word avaiable in this sentences"))

// Remove duplicate

function removeDuplicate(str) {
    const newArr = [];
    for (const element of str) {
        console.log(element);
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    }
    // return newArr.join("");
    // Using inbuilt method
    return [...new Set(str)].join("")
}
// console.log(removeDuplicate("Hello Freind chai pi lo..."))

// Find first non-repated character in a string.
// Get first element of array and check with other element inside another for loop

function findNonRepatedChar(str) {
    let alreadyCheckArray = [];

    for (let i = 0; i < str.length; i++) {
        const ithValue = str[i];
        // Skip that array is value is already present in array
        if (alreadyCheckArray.includes(ithValue)) {
            continue;
        }
        alreadyCheckArray.push(ithValue)
        let status = false;
        for (let j = i + 1; j < str.length; j++) {
            const jthValue = str[j];
            if (ithValue == jthValue) {
                status = true;
            }

        }
        console.log("stat: ", status, ithValue);
        if (!status) {
            return ithValue;
        }
    }
    return false
}

// console.log(findNonRepatedChar("HaaH"));

// Optimize
function findNonRepatedCharWithObj(str) {
    for (let i = 0; i < str.length; i++) {
        // This will check the index string from left side and  lastIndexOf from right side.(2 occurance count left side and for right rigt side only)
        console.log("index: ", str.indexOf(str[i]), "index of: ", str.lastIndexOf(str[i]));
        //index:  0 index of:  3
        // If both match means there is no repated of data
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return str[i]
        }


    }
}
// console.log(findNonRepatedCharWithObj("HaaHi"));

// Count the occurance
function countOccurance(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        // obj[str[i]] = obj[str[i]]+1 || 1
        obj[str[i]] = obj[str[i]] != undefined ? obj[str[i]] + 1 : 1

    }
    return obj;
}
// console.log(countOccurance("hello"));

// Convert a string to title case (capitalize the first letter of each word).

function stringTitleCase(str) {
    const strArr = str.split(" ");
    let newArr = [];
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i].toLowerCase();
        // console.log(word.substring(2,6)) // start from index whant upto that index
        newArr.push(word[0].toUpperCase() + word.substring(1))

    }
    return newArr.join(" ");
}
// console.log(stringTitleCase("Hi this is new was to present something"));

function validateEmail(str) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(str);

}
// console.log(validateEmail("palrishi@gmail.c"));

// Extract the domain name from an email address.
function getDomainFromEmail(str) {
    // find the position of last @
    const atPosition = str.lastIndexOf("@");
    // @ will also include, to exclude move 1 position forward
    let domainName = str.substring(atPosition + 1)
    return domainName;

}
// console.log(getDomainFromEmail("palrish@gmail.com"))

function replaceSpace(str, replaceWith) {
    const strArr = str.split(" ").join(replaceWith)
    return strArr
}
// console.log(replaceSpace("hello world","-"));

// Find most repeated character

function getCharString(str) {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        // obj[str[i]] = obj[str[i]] ? obj[str[i]]+1 : 1
        obj[str[i]] = obj[str[i]] + 1 || 1

    }

    console.log(obj);
    let maxLenght = 1
    let maxChar = str[0];
    for (const key in obj) {
        if (obj[key] > maxLenght) {
            maxLenght = obj[key];
            maxChar = key
        }
    }
    return maxChar

}
// console.log(getCharString("Hello worldeeaaaaaa"));



// find largest substring length
// Adding the unique value in set and storing mmax value else remove if value is repated
function longestUniqueSubStrBasic(str) {
    let start = 0;
    let end = 0;
    let maxLenght = 0;
    let uniqueChars = new Set();

    while (end < str.length) {
        console.log(uniqueChars);

        if (!uniqueChars.has(str[end])) {
            uniqueChars.add(str[end]);
            end++;
            maxLenght = Math.max(maxLenght, uniqueChars.size);
        }
        else {
            uniqueChars.delete(str[end]);
        }

    }
    return maxLenght;
}

// console.log(longestUniqueSubStrBasic("abcdadzyxpg"));

function longestUniqueSubstring(str) {
    let maxLenght = 0;
    let start = 0;
    const map = new Map();

    for (let i = 0; i < str.length; i++) {

        if (map.has(str[i])) {
            start = Math.max(map.get(str[i]) + 1, start)
        }
        map.set(str[i], i);
        maxLenght = Math.max(maxLenght, i - start + 1)
    }
    console.log(map)
    return maxLenght;


}
// console.log(longestUniqueSubstring("abcabcabacb"));

// Find the most frequent word in a string.

function mostFrequentWord(str) {
    const word = str.toLowerCase().split(" ");
    // const word = str.toLowerCase().match(/\w+/g);
    console.log(word);
    let obj = {};
    let maxCount = 0;
    let mostFrequent = "";
    for (let i = 0; i < word.length; i++) {
        const singleWord = word[i];
        obj[singleWord] = obj[singleWord] + 1 || 1
        if (obj[singleWord] > maxCount) {
            maxCount = obj[singleWord];
            mostFrequent = singleWord
        }

    }
    return mostFrequent;
}
// console.log(mostFrequentWord("This is a test. This test is only a test."));

// Remove all non-alphanumeric characters from a string.


function removeNonAlphanumeric(str) {
    // Repacing with ^ means Except this reaplce all with empty
    return str.replace(/[^a-zA-Z0-9]/g, '')
}
// console.log(removeNonAlphanumeric("hello@world!")); // "helloworld"

function containsSubstring(str, substring) {
    // indexIf method return -1 if value is not found, if -1 means to return the oppositer condiiton use !
    return str.indexOf(substring) != -1;
}
// console.log(containsSubstring("hello world", "world")); // true

function splitIntoWords(str) {
    // return str.split(" ")
    return str.match(/\w+/g)
}
// console.log(splitIntoWords("This is a test.")); // ["This", "is", "a", "test"]

function checkPassword(password, password_repeat) {
    if (password != password_repeat) return false;
    if (password.length < 8) return false;
    let numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let specialArr = ['&', '$', '%', '§', '_']
    let numberPresent = false;
    let upperPresent = false;
    let lowerPresent = false;
    let speicalPresent = false
    for (let i = 0; i < password.length; i++) {
        let pass = password[i];
        if (upperArr.includes(pass)) upperPresent = true;
        if (lowerArr.includes(pass)) lowerPresent = true;
        if (specialArr.includes(pass)) speicalPresent = true;
        if (numberArr.includes(pass)) numberPresent = true;
        console.log(pass);

    }
    console.log(numberPresent, upperPresent, lowerPresent, speicalPresent);

    return numberPresent && upperPresent && lowerPresent && speicalPresent;
}

console.log(checkPassword(
    'JoFDd$0MY6Ad4',
    'JoFDd$0MY6Ad4'
));

function checkPassword(password, password_repeat) {
    if (password !== password_repeat) {
        return false;
    }
    if (password.length < 8) {
        return false;
    }
    if (!/\d/.test(password)) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/[$&%§_-]/.test(password)) {
        return false;
    }
    return true;

}


// function checkPassword(password, password_repeat) {
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[&$%§\-_]).{8,}$/;
//     const check=(password===password_repeat 
//                  &&
//                  passwordRegex.test(password)                 
//                 )
//                  ?true : false;

//     return check;



// }

// function littleChild(child1, child2) {
//     arry1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
//       return !arry1.includes(child1) && arry1.includes(child2)||  arry1.includes(child1) && !arry1.includes(child2)

//     }


function littleChild(child1, child2) {
    result1 = child1 >= 0 && child1 <= 14
    result2 = child2 >= 0 && child2 <= 14

    fixresult = (result1 !== result2) ? true : false
    return fixresult
}


function bin2dec1(bin) {
    return parseInt(bin,2)
}   

function bin2dec(bin) {
    let deci = 0;
    for (let i = bin.length - 1, j = 0; i >= 0; i--, j++) {
        deci += parseInt(bin[i]) * Math.pow(2, j);
    }
    return deci;
}
function dec2bin(dec) {
    return dec.toString(2)
  }


  function getReducedPrice(price, discount) {
    let discountAmount = ( discount/100 * price)
    
   let dicountedPrice =  price - discountAmount
    return  Math.round(dicountedPrice * 100) / 100
  }

  function lastButNotLeast(a, b, c) {
    da = a % 10;
    db = b % 10;
    dc = c % 10;
    
    return da === db || db == dc || da == dc;
  }


  function cinemaQueue(max, visitors) {
    let groups = 0;

    // Count each 'X' as a group
    for (let i = 0; i < visitors.length; i++) {
        if (visitors[i] === 'X') {
            groups++; // Every 'X' counts as a new group
        }
    }

    if (groups === max) {
        return 'full';
    } else if (groups > max) {
        return `too much: ${groups - max}`;
    } else {
        return `not full: ${max - groups}`;
    }
}

// Examples:
// console.log(cinemaQueue(6, ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X'])); // "full"
// console.log(cinemaQueue(6, ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'X', 'X'])); // "too much: 2"
// console.log(cinemaQueue(4, ['X', 'O', 'X'])); // "not full: 2"
// console.log(cinemaQueue(8, ['X', 'O', 'X', 'X'])); // "not full: 5"


function cinemaQueue2(max, visitors) {
    let countX=0;
    let countO=0;
    visitors.forEach((item,index)=>{
      if(item=='X')countX++;
      if(item=="O")countO++;
    })
    console.log(countX,countO,max);
      if(countX==max && countO<=max)
        return "full";
    if(countX>max)
      return "too much: "+(countX-max)
    else {
      return "not full: "+(max-countX)
    }
  }

// console.log(cinemaQueue2(6, ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X'])); // "full"
// console.log(cinemaQueue2(6, ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'X', 'X'])); // "too much: 2"
// console.log(cinemaQueue2(4, ['X', 'O', 'X'])); // "not full: 2"
// console.log(cinemaQueue2(8, ['X', 'O', 'X', 'X'])); // "not full: 5"





// console.log(cinemaQueue3(6, ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X'])); // "full"
// console.log(cinemaQueue3(6, ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O', 'X', 'X', 'X'])); // "too much: 2"
// console.log(cinemaQueue3(4, ['X', 'O', 'X'])); // "not full: 2"
// console.log(cinemaQueue3(8, ['X', 'O', 'X', 'X'])); // "not full: 5"



function circularRepeat(s, n) {
    const newStr = s.repeat(n);
   return  newStr.length > 100 ?  newStr.substring(0, 100)  :  newStr
  }


//   Given is an array numbers with different numbers. Return an array in which the first entry is swapped with the last. The rest remains unchanged.

  function swap(numbers) {
    let len = numbers.length;
    let tmp1 = numbers[0];
    numbers[0] = numbers[len-1];
    numbers[len -1] = tmp1;
    return numbers;
  }


