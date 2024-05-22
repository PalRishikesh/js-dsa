/** What is stack */
// Linear data structure type
// Last in first out (LIFO) order
// Stack is a data structure that consists of Nodes. Each Node stores a value and a pointer to the next node in the stack.

let data = []; // Empty stack 
let currentSize = data.length;
let maxLength = 5;

function push(value){
    if(currentSize < maxLength){
        data[currentSize] = value;
        currentSize++;
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

push(10)
push(11)
push(21)
push(31)
push(41)
push(25)

pop()
pop()
pop()
pop()
pop()
pop()


console.log(data);