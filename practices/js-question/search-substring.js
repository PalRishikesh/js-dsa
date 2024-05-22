const string = "hello world";
const substring = "wor";


function substringExits(string, substring){
    console.log(string.length - substring.length)

    for(let i=0; i<= string.length - substring.length; i++){
        let match = true;
        for(let j=0;j < substring.length; j++){
            console.log(string[i+j])
            console.log(substring[j])
            if(string[i+j] != substring[j]){
                match = false;
                break;
            }
        }
        if(match){
            return true;
        }
    
    }
    return false;
}

console.log(substringExits(string, substring)); 