// Sum of natural number

function sumOfAllNatualNumber(num){
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum+ i;
    }

    // return sum;
    return num * (num +1 )/2
}

// console.log(sumOfAllNatualNumber(5));


function sumOfDigits(num){
    let sum =0;
    while(num > 0){
        sum = sum + num %10;
        num = Math.floor(num/10);
    }
    return sum;
}

// console.log(sumOfDigits(12345));

// Count the occurances

function countOccurance(num){
    let count = 0;
    do {
        count++;
        num = Math.floor(num/10);
    } while (num > 0);
    return count;
}
// console.log(countOccurance(12456789));


//Plaindrom

function isPalindrome(num){
    let copyNum = num;
    reverseNum = 0;

    while(copyNum > 0){ 

        const lastDigit = copyNum %10;
        reverseNum = reverseNum *10  + lastDigit;
        copyNum = Math.floor(copyNum/10);
    }
    return reverseNum == num;

}
// console.log(isPalindrome(1212));

function fib(num){
    if(num < 2){
        return num;
    }

    let prev = 0, current = 1, next;

    for(let i=2; i<= num; i++){
        next = prev + current;
        prev = current;
        current = next;
    }
    return next;
}
// console.log(fib(5));

function findMissingNumber(num){
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += num[index];
    }
    const naturalSum = num.length * (num.length + 1)/2
    return naturalSum - sum;
}
console.log(findMissingNumber([0,1,2,4]));



