

function fibonacci(n){
    let first = 0;
    let second = 1;
    let fibArray = [0,1];
    let fibSum = 1 ;
    if(n == 0){
        fibSum = 0;
        console.log(fibSum);
    }
    else if(n == 1 || n == 2){
        fibSum = 1 ;
        console.log(fibSum);
    }
    else{
        for(let i = 2; i < n; i++){
            let temp = first + second;
            first = second;
            second = temp;
            fibArray.push(second);
            fibSum += first;
        }
        console.log(fibSum);
    }
  
    return fibArray;


}

// console.log(fibonacci(3))

// Simple Calculation

function fibonacciFun(n){
    const fib = [0,1];
    for(let i=2;i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}

console.log(fibonacciFun(10))