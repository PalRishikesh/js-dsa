
let data = [];
let currentSize = data.length;

let max = 50;

function push(value){
    if(currentSize <= max){
        data[currentSize] = value;
        currentSize+=1;
    }
    else{
        console.log("Stack is already full")
    }
}

function pop(){
    if(currentSize > 0){
        let lastElement = data[currentSize-1];
        currentSize -=1;
        data.length = currentSize;
        return lastElement;
    }
    else{
        console.log("Stack is already empty");
    }
}

function reverseString(list){
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        push(element)
    }
    for (let index = 0; index < list.length; index++) {
        
        list[index] = pop()
    }
}

let str="rishikesh";
str = str.split("");
// console.log(str)
reverseString(str);
console.log(str.join(""))

