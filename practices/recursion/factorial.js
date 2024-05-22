function recurseiveFactorial(n){
    if(n < 2){
       return 1;
    }
   return n * recurseiveFactorial(n-1)
   
}

// n! = n * (n-1)
console.log(recurseiveFactorial(0));
console.log(recurseiveFactorial(1));
console.log(recurseiveFactorial(5));