function balancePar(array, startIndex = 0, currentCount = 0){
    if(startIndex == array.length){
        return currentCount == 0;
    }

    if(currentCount < 0){ // At starting only we get the closing paramethesis
        return false;
    }

    if(array[startIndex] == "("){
        return balancePar(array, startIndex +1 , currentCount +1);
    }
    else if(array[startIndex] == ")"){
        return balancePar(array, startIndex + 1 , currentCount -1)
    }
    else{
        return false;
    }
}

let arr = ["(",")","(","(",")",")"]
console.log(balancePar(arr));