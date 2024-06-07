class Node{
    constrcutor(data, next, prev){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data, this.head, null);

    // If there is already data
    if(this.head != null){
        this.head.prev = newNode;
    }
    // This will alway runs as we have created new node
    this.head == newNode;
    // If we want to add tail, unless point to circule point to head oly 
    if(this.tail == null){
        this.tail = newNode
    }
}

DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data, null, this.tail)

    if(this.tail != null){
        this.tail.next = newNode;
    }
    this.tail = newNode;

    if(this.head == null){
        this.head = newNode;
    }
}


DoublyLinkedList.prototype.insertAfte =  function(data,prevNode){
    if(prevNode == null){
        console.log("Invalid prev node");
        return;
    }
    const newNode = new Node(data, prevNode.next, prevNode);

    if(prevNode.next != null){
        prevNode.next.prev = newNode;
    }
    prevNode.next = newNode;

    // Tail
    if(newNode.tail == null){
        this.tail = newNode;
    }

}


DoublyLinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return; // Nothing to delete
    }
    if(this.head == this.tail){
        this.head = null;
        this.tail = null;
    }
    else{
        this.head = this.head.next;
        this.head.prev = null;
    }

}

DoublyLinkedList.prototype.deleteLastNode = function(){
    if(!this.tail){
        console.log("Double list is empty");
        return;
    }
    if(this.head == this.tail){
        this.head = null;
        this.tail = null;
    }
    else{
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
}

DoublyLinkedList.prototype.reverse = function(){
    let current = this.head;
    let temp = null;

    while(current != null){
        //Swapping
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        // Mve to next node
        current = current.prev;
    }
    if(temp != null){
        this.tail = this.head;
        this.head = temp.prev;
    }
}