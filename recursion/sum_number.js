
function sumNumber(number){
    if(number == 1){
        return 1;
    }

    return number + sumNumber(number-1);
}

console.log(sumNumber(3));


