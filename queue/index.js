class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(data){
         // Simple Code 
        // this.queue.push(data)

         // Extra Code 
        let currentSize = this.queue.length;
        this.queue[currentSize] = data;
    }

    dequeue(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
         // Simple Code 
        // this.queue.shift();

        // Extra Code 
        for (let index = 0; index < this.queue.length; index++) {
            this.queue[index] = this.queue[index+1];
        }
        this.queue.length = this.queue.length - 1
    }

    isEmpty(){
        return this.queue.length === 0
    }

    //front/peek
    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.queue[0]
    }

    size(){
        return this.queue.length;
    }

    clear(){
        this.queue = [];
    }

    printQueue(){
        let str = "";
        for (let index = 0; index < this.queue.length ; index++) {
           str += this.queue[index] + " ";   
        }
        return str;
    }

}

let myQueue = new Queue();

myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)

console.log(myQueue.printQueue())  // 10 20 30 
myQueue.dequeue();
console.log(myQueue.printQueue()) // 20 30 