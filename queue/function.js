
let data = [];
let currentSize = data.length;

let maxSize = 50;

function enqueue(value){
    if(currentSize <= maxSize){
        data[currentSize] = value;
        currentSize++;
    }
}

function dequeue(){
    if(currentSize > 0){
        for (let index = 0; index < data.length; index++) {
            data[index] = data[index+1];
        }
        currentSize--;
        data.length = currentSize
    }
}

function frontValue(){
    if(currentSize > 0){
       return data[0]
    }
}

function rearValue(){
    if(currentSize > 0){
       return data[currentSize-1]
    }
}
function display(){
    console.log(data)
}


enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)

display()
console.log(frontValue())
dequeue();
enqueue(50)
display();
console.log(frontValue())
console.log(rearValue())
