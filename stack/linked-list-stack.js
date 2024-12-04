class Node{
    constructor(data){
        this.value = data
        this.next = null;
    }
}

class Stack{

    constructor(){
        this.top = null;
        this.length =0;
    }

    append(data){
        const node = new Node(data);
        if(this.length == 0){
            this.top = node;
        }
        else{
            let holdPoint = this.top;
            this.top = node;
            node.next = holdPoint;

        }
        this.length++;
    }
    display(){
        console.log(this.top);
        
    }
}


const myStack = new Stack();
myStack.append(10);
myStack.append(20);
myStack.display();