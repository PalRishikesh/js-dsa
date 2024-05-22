let data = []; // Empty stack 
let currentSize = data.length;
let maxLength = 5;

function push(){
    value = document.getElementById("textValue").value;
    if(currentSize < maxLength){
        data[currentSize] = value;
        currentSize++;
        document.getElementById("textValue").value = ''
    }
    else{
        console.log("Stack is full...");
    }
}



function pop(){
    if(currentSize > 0){
        currentSize -=1;
        data.length = currentSize
        
    }
    else{
        console.log("Stack is empty...");
    }
}

function display(){
    for(let i=0; i<currentSize; i++){
        console.log(data[i]);
    }
}