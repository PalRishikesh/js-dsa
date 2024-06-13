

function findLength(string){
    let count = 0;
    while(string[count] != undefined){
        count +=1;
    }
    return count;
}

function recurLength(string){
    if(string == ""){
        return 0;
    }

    return 1 + recurLength(string.substring(1))
}

// console.log(recurLength("Hello"));
console.log(findLength("Hello"));