class Stack{
    // Wheneve we create object, new empty stack is created
    constructor(){
        this.stack = []
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    isEmpty(){
        return this.stack.length === 0;
    }

    size(){
        return this.stack.length;
    }

    clear(){
        this.stack = [];
    }

    contains(element){
        return this.stack.includes(element);
    }

    reverse(){
        this.stack.reverse();
    }

    printStack(){
        let str="";
        for (let index = 0; index < this.stack.length; index++) {
           str += this.stack[index] +"\n";
        }
        return str;
    }
}

// Usage Example

let myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
console.log(myStack.printStack());
myStack.pop();
console.log(myStack.printStack());