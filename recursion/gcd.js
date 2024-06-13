


function gcd(num1, num2){
    console.log(num1, num2);
    if(num1 == num2){
        return num1;
    }
    if(num1 > num2){
        return gcd(num1 - num2, num2);
    }
    else{
        return gcd(num1, num2 - num1);
    }
}

// console.log(gcd(10,15));

function gdcIterative(num1, num2){
    let hfc;
    for(let i=1; i<= num1 && i <= num2; i++){
        console.log("index: ",i );
        console.log(num1, num1 % i);
        console.log(num2, num2 % i);
        if(num1 % i == 0 && num2 % i == 0){
            hfc = i
        }
    }
    return hfc;
}

console.log(gdcIterative(10,15));
