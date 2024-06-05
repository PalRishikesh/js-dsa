class Stack{
    item=[];
    constructor(size){
        this.maxSize = size;
        this.currentSize = this.item.length;
    }

    push(value){
        if(this.currentSize < this.maxSize){
            this.item[this.currentSize] = value;
            this.currentSize++;
        }
    }

    pop(){
        if(this.currentSize > 0){
            let lastValue = this.item[this.currentSize-1];
            this.currentSize--;
            this.item.length = this.currentSize;
            return lastValue;
        }
    }

    display(){
        let str="";
        for (let index = 0; index < this.item.length; index++) {
            str += this.item[index] +" ";
        }

        return str;
    }

    reverse(stringList){
        // Adding in stack
        for (let index = 0; index < stringList.length; index++) {
            const element = stringList[index];
            this.push(element);
        }
        for (let index = 0; index < stringList.length; index++) {
            stringList[index] = this.pop();
        }
    }
}


// let myStack = new Stack(5)

// myStack.push(1)
// myStack.push(2)
// myStack.push(3)
// myStack.push(3)
// myStack.push(4)

// console.log(myStack.display());
// myStack.pop();
// console.log(myStack.display());

// let string = "Rishikesh";
// let strStack = new Stack(50);

// let stringList = string.split("");

// strStack.reverse(stringList)
// let reverseValue = "";
// for (let index = 0; index < stringList.length; index++) {
//     reverseValue += stringList[index];
// }
// console.log(reverseValue);


/** Revere a world */
let words = " 3c      2zPeO dpIMVv2SG    1AM       o       VnUhxK a5YKNyuG     x9    EQ  ruJO       0Dtb8qG91w 1rT3zH F0m n G wU";
words = words.split(" ");
// console.log(words);
let wordStack = new Stack(500);
 wordStack.reverse(words);


let reverseValue = "";
for (let index = 0; index < words.length; index++) {
    if(words[index] != ""){
        reverseValue +=" "+words[index];
    }
    
}

console.log(reverseValue);






