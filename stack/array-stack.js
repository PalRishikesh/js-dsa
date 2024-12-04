class Stack{
    
    constructor(){
        this.array=[];
    }

    append(data){
        this.array.push(data);
    }

    remove(){
        this.array.pop();
    }

    peek(){
        console.log(this.array[this.array.length-1]);
        
    }
    display(){
        console.log(this.array);
    }

}


const myStack = new Stack();
myStack.append(50);
myStack.append(2);
myStack.append(3);
myStack.append(40);
myStack.remove(); 
myStack.append(25);
myStack.display();
myStack.peek();