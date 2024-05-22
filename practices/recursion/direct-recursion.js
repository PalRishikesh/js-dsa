function apple(x){
  
    if(x<10){
        apple(x+1)
    }
    console.log("Calling ",x)
  
}
let data = 0;
// apple(data)

function factorialNumber(number){
    if(number == 0 ){
        return 1;
    }
    return number * factorialNumber(number-1)
}

let x = 5;
console.log(factorialNumber(x));
