// function fibonaaci(n){
//     let first = 0;
//     let second = 1;
//     let sum = 0 ;
//     if(n == 0 ){
//         return first ;
//     }
//     else if(n == 1){
//         return second ;
//     }
//     sum  = first + second; // 0 + 1
//     first = second; // 1
//     second = sum; // 1 

//     return fibonaaci(n - second);
   
   
// }

// console.log(fibonaaci(3))
// Above code is not working

function recursiveFibonacci(n){
    if(n < 2){
        return n;
    }
    return recursiveFibonacci(n -1) + recursiveFibonacci(n-2) //   1 +0 ,  2 + 1
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(6));
