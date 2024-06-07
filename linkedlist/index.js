class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}

/** Insert value at beginning */
LinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node();
    this.head = newNode;
}

/** Insert at the end */
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node();
    let lastNode = this.head;
    // while(lastNode.next){ 
    while(lastNode.next != null){
       lastNode = lastNode.next; 
    }
    lastNode = newNode;
}

/** Insert at position */
LinkedList.prototype.insertAtPosition = function(data, position){
    const newNode = new Node(data);
    let previNode = this.head;
    let nextNode = this.head;
    let currentNode = this.head;
    for (let index = 0; index < position; index++) {
        previNode = currentNode;
        currentNode = currentNode.next;
        nextNode = currentNode.next;
    }
    currentNode = newNode;
    previNode.next = currentNode;
    currentNode.next = nextNode;
}

/** Insert at given node */
LinkedList.prototype.insertAfter = function(prevNode, data){
    const newNode = new Node(data, prevNode.next); // new node next to prev node next
    prevNode.next = newNode; // Point prev node to new node

}

/** Delete the first node */
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return;
    }
    this.head = this.head.next;
}

LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        return;
    }
    if(!this.head.next){
        this.head = null;
        return;
    }
    let secondLastNode = this.head;
    while(secondLastNode.next.next){
        secondLastNode = secondLastNode.next;
    }
    secondLastNode.next = null;

}

LinkedList.prototype.deleteByKey = function(key){
    // If list is empty
    if(!this.head){
        return;
    }
    // Key is present is head
    if(this.head.data == key){
        this.head = this.head.next;
        return;
    }

    let current = this.head;

    while(current.next != null){
        if(current.next.data == key){
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
    console.log("No key found");
}

/** Search Operation */
LinkedList.prototype.search = function(key){
    let currentNode = this.head;
    while(currentNode){
        if(currentNode.data == key){
            return true;
        }
        currentNode = currentNode.next;
    }
    return false;
}

// Traversal operation

LinkedList.prototype.printList = function(){
    let currentNode = this.head;
    let listValue =[];
    while(currentNode){
        listValue.push(currentNode.data);
        currentNode = currentNode.next;
    }
    console.log(listValue.join(" -> "));

}

/** Reverse LinkedList */

LinkedList.prototype.reverse = function(){
    let current = this.head;
    let prev = null;
    let next = null;

    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    this.head = prev;
    
}
