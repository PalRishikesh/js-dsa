class Stack{

    item= [];
    maxSize;
    currentSize;

    constructor(size){
        this.maxSize=size;
        this.currentSize=this.item.length;
        console.log("constructor....")
    }
    push(newValue){
        if(this.currentSize < this.maxSize){
            this.item[this.currentSize] = newValue;
            this.currentSize++;
        }
        else{
            console.log("Stack is full");
        }
    }

    pop(){
        if(this.currentSize > 0){
            const lastValue = this.item[this.currentSize-1];
            this.currentSize--;
            this.item.length = this.currentSize;
            return lastValue;
        }
        else{
            console.log("Stack is empty");
        }

    }
    reverseStr(value, newArray){
        let str = value.split('');
        for (let index = 0; index < str.length; index++) {
            this.push(str[index])
        }
        for (let index = 0; index < str.length; index++) {
            // console.log(this.pop());
            newArray[index] = this.pop()
        }
        return newArray;

    }
    display(){
        console.log(this.item);
    }
}

let st1 = new Stack(5);
// st1.push(1)
// st1.push(2)
// st1.push(3)
// st1.push(4)
// st1.push(5)
// st1.push(6)


// st1.display()

// st1.pop()
// st1.pop()
// st1.pop()
// st1.pop()
// st1.pop()
// st1.pop()
// st1.pop()
// st1.display()

let str = "Rishi";
let rever = st1.reverseStr(str,[]);
st1.display()
console.log(rever);