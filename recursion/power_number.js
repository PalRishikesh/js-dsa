// Power of a given number with base and exponent

function powerNumber(base, exponent){
    let num = 1;
    for(let i=0; i < exponent; i++){
        console.log(exponent);
        num = num * base;
    }

    return num;
}
// console.log(powerNumber(2,4));


function recursivePowerNumber(base, exponent){
    if(exponent == 0){
        return 1;
    }
    return base * recursivePowerNumber(base, exponent -1);
}

console.log(recursivePowerNumber(2,4));
