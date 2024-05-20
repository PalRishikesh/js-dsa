function isPrime(n){
    let primeNumber = true;
    if(n < 2){
        return false;
    }
    // for(let i = 2; i<n; i++){
        for(let i = 2; i< Math.sqrt(n); i++){
        if(n%i == 0){
            primeNumber = false;
            break;
        }
    }
    return primeNumber;
}

console.log(isPrime(5));