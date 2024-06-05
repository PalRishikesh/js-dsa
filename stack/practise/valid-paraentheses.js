// ([]{})

function isValid(s){
    const stack = [];
    for (let index = 0; index < s.length; index++) {
        const char = s[index];
        if(char == "(" || char == "[" || char == "{"){
            stack.push(char);
        }
        else if(char == ")" || char == "]" || char == "}"){
            if(isEmpty(stack)){
                return false;
            }

            const top = stack.pop();
            // console.log("top ",top);
            // Checking current char with top of stack if not matches return false
            if( 
                (char == ")" && top != "(") ||
                (char == "]" && top != "[") ||
                (char == "}" && top != "{") 
            ){
                return false
            }
        
        }

        
    }

    // console.log("--");
    // console.log(stack);
    return isEmpty(stack)
}


function isEmpty(stack){
    return stack.length == 0;
}

let s ='([]){}';

console.log(isValid(s));