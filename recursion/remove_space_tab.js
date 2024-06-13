

let sampleString = "Hi I am Rishikesh Pal   Please follow my channel\tfor more such content  :)"

function removeTAS(inputString){
    let formatedString = "";
    for(let i=0;i< inputString.length; i++){
        let char = inputString[i];
        if(char !== " " && char !== "\t"){

            formatedString = formatedString + char;
        }
    }
    return formatedString;
}
// console.log(removeTAS(sampleString));


function recursiveRTAS(inputString){
    if(inputString.length == 0){
        return "";
    }

    let firstChar = inputString[0];
    // Remainin character 
    let restOfString = inputString.slice(1);

    if(firstChar == " " || firstChar =="\t"){
        return recursiveRTAS(restOfString);
    }

    return firstChar + recursiveRTAS(restOfString);
}

console.log(recursiveRTAS(sampleString));