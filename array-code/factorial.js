function factorialNumber(n){
    let fact = 1;
    
    /** Extra Start here */
    // if(n == 1 || n== 0){
    //     return fact;
    // }
    // else{
    //     for(let i = n; i > 1; i--){
    //         fact = fact *i;
    //     }
    // }
    /** Extra End here */

    for(let i = n; i > 1; i--){
        fact = fact *i;
    }
    return fact;
}

console.log(factorialNumber(5))