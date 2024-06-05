
let data = [];
let currentSize = data.length;

let max = 5;

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
        currentSize -=1;
        data.length = currentSize;
    }
    else{
        console.log("Stack is already empty");
    }
}

push(10)
push(20)
push(30)
push(40)
push(50)

console.log(data);
pop()
pop()
pop()
pop()
pop()
pop()
console.log(data);
