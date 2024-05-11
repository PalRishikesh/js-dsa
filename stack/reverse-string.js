let data=[];

let currentSize = data.length;

function push(value){
    data[currentSize] = value;
    currentSize +=1;
}

function pop(){
    let lastItem = data[currentSize-1];
    currentSize -=1;
    data.length = currentSize;
    return lastItem;
}

// push(1)
// push(2)
// push(3)
// push(4)

// console.log(data);
// pop()
// console.log(data);


let str= "Rishi";

let strArray = str.split("");

function reverStr(item){
    for(let i =0; i< item.length; i++){
        push(item[i])
    }
    for(let i =0; i< item.length; i++){
        // console.log(pop());
        item[i] = pop();
    }
}
reverStr(strArray) // passing as pass by refrenece (array and object only)

console.log(strArray.join(""));