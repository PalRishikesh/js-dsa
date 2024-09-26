// function gHappy(string) {
//   let status =false;
//     for (let i = 0; i < string.length; i++) {
//           if(string[i] == 'g' && string[i+1] =='g'){
//             status =  true;
//           }
//     }
//   return status;
// }

function areGsHappy(str) {
    // Convert string to lower case to handle cases like 'Huggy Wuggy'
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'g') {
            // Check if the 'g' is "happy" (i.e., it has another 'g' next to it)
            if ((i > 0 && str[i - 1] === 'g') || (i < str.length - 1 && str[i + 1] === 'g')) {
                continue; // This 'g' is happy, move to the next character
            } else {
                return false; // Found an unhappy 'g'
            }
        }
    }

    return true; // All 'g's are happy
}


function uniquePalindromeSubstrings(str) {
    let uniquePalindromes = new Set();

    // Helper function to check if a string is a palindrome
    function isPalindrome(substring) {
        let left = 0;
        let right = substring.length - 1;
        while (left < right) {
            if (substring[left] !== substring[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // Loop through all possible substrings
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.slice(i, j);
            if (isPalindrome(substring)) {
                uniquePalindromes.add(substring);
            }
        }
    }

    // Convert set to array, sort, and return it
    return Array.from(uniquePalindromes).sort();
}

// Test cases:
// console.log(uniquePalindromeSubstrings("abc")); // ['a', 'b', 'c']
// console.log(uniquePalindromeSubstrings("aaa")); // ['a', 'aa', 'aaa']
// console.log(uniquePalindromeSubstrings("racecar")); // ['a', 'c', 'cec', 'e', 'racecar']
// console.log(uniquePalindromeSubstrings("abba")); // ['a', 'abba', 'b', 'bb']
// console.log(uniquePalindromeSubstrings("")); // []







function uniquePalindromeSubstrings(str) {
    const result = [];
    function isPalindrome(sub) {
      return sub === sub.split('').reverse().join('');
    }
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const sub = str.slice(i, j);
        console.log(sub);
        
        if (isPalindrome(sub) && !result.includes(sub)) {
          result.push(sub);
        }
      }
    }
    result.sort();
    
    return result;
  }
  const inputString = "aabcd";
//   const palindromes = uniquePalindromeSubstrings(inputString);
//   console.log("Unique Palindromic Substrings:", palindromes);

function largestSumSubsequence(arr) {
    // Filter out the positive numbers
    let positiveNumbers = arr.filter(num => num > 0);

    // If there are positive numbers, return their sum
    if (positiveNumbers.length > 0) {
        return positiveNumbers.reduce((sum, num) => sum + num, 0);
    } else {
        // If no positive numbers, return the largest (least negative) number
        return Math.max(...arr);  // This handles the case of all negative numbers
    }
}


function largestSumSubsequence2(arr) {
    let sum = 0;  // To store the sum of positive numbers
    let largestNegative = -Infinity;  // To track the largest negative number

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            // Add positive numbers to the sum
            sum += arr[i];
        } else {
            // Track the largest negative number
            largestNegative = Math.max(largestNegative, arr[i]);
        }
    }

    // If sum is greater than 0, return it; otherwise return the largest negative number
    return sum > 0 ? sum : largestNegative;
}

// // Test cases:
// console.log(largestSumSubsequence2([1, 2, 3, -4, 5])); // 11 (1 + 2 + 3 + 5)
// console.log(largestSumSubsequence2([-1, -2, -3, -4, -5])); // -1 (largest negative number)
// console.log(largestSumSubsequence2([0, 4, -3, 6, 7])); // 17 (4 + 6 + 7)
// console.log(largestSumSubsequence2([-10, 0, -5, 2])); // 2



function largestSumSubsequence3(arr) {
    // Initialize the variables
    let maxSum = arr[0];  // Start with the first element
    let currentSum = arr[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Either add the current element to the existing subarray or start a new subarray
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        // Update maxSum if currentSum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Test cases:
// console.log(largestSumSubsequence3([1, 2, 3, -4, 5])); // 7 (1 + 2 + 3 + (-4) + 5)
// console.log(largestSumSubsequence3([-1, -2, -3, -4, -5])); // -1 (largest single element)
// console.log(largestSumSubsequence3([0, 4, -3, 6, 7])); // 14 (4 + (-3) + 6 + 7)
// console.log(largestSumSubsequence3([-10, 0, -5, 2])); // 2 (the single element 2)
// console.log(largestSumSubsequence3([5, -3, 5, -2, 1])); // 8 (5 + (-3) + 5 + (-2) + 1)


function minimumCost(arr) {
    let m = arr.length;
    let n = arr[0].length;

    function findMinCost(i, j) {
        console.log("i: ",i," j: ",j);
        
        // Base case: if we're at the bottom-right corner
        if (i === m - 1 && j === n - 1) {
            return arr[i][j];
        }

        // If we can only move right
        if (i === m - 1) {
            return arr[i][j] + findMinCost(i, j + 1);
        }

        // If we can only move down
        if (j === n - 1) {
            return arr[i][j] + findMinCost(i + 1, j);
        }

        // Recursively get the minimum cost from moving right or down
        let moveRight = findMinCost(i, j + 1);
        let moveDown = findMinCost(i + 1, j);

        // Return the current cost + the minimum of the two options
        return arr[i][j] + Math.min(moveRight, moveDown);
    }

    // Start from the top-left corner
    return findMinCost(0, 0);
}


// Test cases:
// console.log(minimumCost([[1, 3, 1], [1, 5, 1], [4, 2, 1]])); // Output: 7
// console.log(minimumCost([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: 21
// console.log(minimumCost([[5, 9, 1], [10, 3, 2], [8, 7, 4]])); // Output: 20


function minimumCost2(arr) {
    const minimumCostToCell = (m,n) => {
        console.log("m: ",m," n:",n);
        
      if (m < 0 || n < 0) return Infinity;
      if (m == 0 && n == 0) {
          return arr[m][n];
      }
    
      return arr[m][n] + Math.min(
          minimumCostToCell(m-1, n), // Moving down
          minimumCostToCell(m, n-1) // Moving left
        )
    }
  
    console.log("arr.length-1 ",arr.length,"arr[0].length-1: ",arr[0].length);
    
    return minimumCostToCell(arr.length-1, arr[0].length-1)
  }

//   console.log(minimumCost2( [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     ]));

    // console.log(minimumCost2( [
    //     [1,10],
    //     [19,30],
    //     [2,3]
    //     ]));


    function isQualified(times, totalTime) {
        const maxTimes = [10, 10, 10, 15, 15, 15, 20, 20];
         const maxTotalTime = 140;
     
        for (let i = 0; i < times.length; i++) {
            if(times[i] > maxTimes[i]) return 'disqualified';
        }

        return totalTime > maxTotalTime ?'disqualified':'qualified'
     }
//   console.log(isQualified([8, 11, 10, 13, 14, 15, 18, 19],110));
  
  function isQualified2(times, totalTime) {
    if (times.length !== 8) {
      return 'disqualified';  // Ensure there are exactly 8 questions
    }
  
    let easy = times.slice(0, 3).every(e => e <= 10);
    let medium = times.slice(3, 6).every(e => e <= 15);
    let hard = times.slice(6).every(e => e <= 20);
  
    // Check if all conditions are met
    return (easy && medium && hard && totalTime <= 140) ? 'qualified' : 'disqualified';
  }



  function findPairs(arr, target) {
    let map=new Map();
    let returnArr=[];
    for (let i = 0; i < arr.length; i++) {
       
        if(map.has(arr[i])){
            const sortedArr = [map.get(arr[i]),arr[i]].sort()
            returnArr.push(sortedArr)
        }
        else{
            map.set(target-arr[i],arr[i])
        }
    }
    // return returnArr.sort((a,b)=> a[0] > b[0]? 1 :-1);
    return returnArr.sort();
    
  }

  function findPairs2(arr, target) {
    result = [];
    for (let i = 0; i < arr.length-1; i++){
      for (let j = i+1; j < arr.length; j++){
        if (arr[i]+arr[j] === target) {
          if (arr[i] < arr[j]){
            result.push([arr[i],arr[j]])
          }else {
            result.push([arr[j],arr[i]])
          }
        }
      }
    }
    return result.sort();
  }

//   console.log(findPairs([3,7,8,4,5,9],
//     12));
  

    function either404(numbers) {
        let status= false;
        let fourOccur= false;
        let zeroOccur = false;
        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i] ==4 && numbers[i+1] ==4) fourOccur = true;
            if(numbers[i] ==0 && numbers[i+1] ==0) zeroOccur = true;
        }
        console.log("fourOccur: ",fourOccur);
        console.log("zeroOccur: ",zeroOccur);
        
        return fourOccur != zeroOccur
      }
// console.log(either404([0,0,3,6,4,4]));
// console.log(either404([4,3,1]));
// console.log(either404([1,4,4,0,2,0,9]));


function longestWord(words) {
     let maxCount=0;
     let maxWord='';
     for (let i = 0; i < words.length; i++) {
           const singleWord = words[i];
           const singleWordCount = singleWord.length
         
           if(singleWordCount > maxCount){
               maxCount =singleWordCount
             maxWord = singleWord;
           }
       else if(singleWordCount == maxCount){
         maxWord ='Foobar'
       }
     }
     return maxWord;
   }

   function longestWord2(words) {
    const sorted  = words.sort((a,b) => a.length < b.length  ? 1  : -1)
    console.log(sorted);
    
    return sorted[0].length === sorted[1].length ? 'Foobar' : sorted[0]
    
  }

//   console.log(longestWord2(['You','are','great']));
  

function arrayManipulation(n, queries) {
    // Step 1: Initialize the array with n elements, all set to 0
    const arr = new Array(n).fill(0);

    // Step 2: Apply each query to the array
    for (let [a, b, c] of queries) {
        console.log([a, b, c]);
        
        // Iterate through the range from a to b (1-based to 0-based)
        for (let i = a - 1; i < b; i++) {
            arr[i] += c; // Add k to each element in the range
            console.log(i,a,b,c,arr[i]);
        }
        console.log("----arr: ",arr);
        
    }

    // Step 3: Find the maximum value in the updated array
    let max = arr[0]; // Start with the first element as the maximum
    for (let i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger value is found
        }
    }

    return max; // Return the maximum value found
}

function arrayManipulation2(n, queries) {
    const array = new Array(n).fill(0)
  
    queries.forEach((query) => {
        console.log(query);
        
      for(let i = query[0] - 1; i < query[1]; i++) {
          array[i] += query[2]
      }
    })
    return array;
    return Math.max(...array)
  }

// Example usage:
const n = 5;
const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
console.log(arrayManipulation2(n, queries)); // Output: 200
