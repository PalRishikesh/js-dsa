/** Binary Search Tree */
class BSTNode{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
        
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    /** Above are basic BST tree core implemention, except function to insert,etc */

    insert(key){
        const newNode = new BSTNode(key);
        if(this.root == null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){ // node is root node
        if(newNode.key < node.key){
            if(node.left == null){
                node.left = newNode;
            }
            else{
                this.insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right == null){
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Deleting node
    delete(key){
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(node, key){
        // If there is no root available
        if(node == null){
            return null;
        }

        if(key < node.key){
            node.left = this.deleteNode(node.left, key);
        }
        else if(key > node.key){
            node.right = this.deleteNode(node.right, key);
        }
        else{
            /** Checking all 3 condition here for deleting */
            // If is a  leaf
            if(node.left === null && node.right === null){
                return null;
            }
            // If any child is present
            else if(node.left == null){
                return node.right;
            }
            else if(node.right == null){
                return node.left;
            }
            else{
                // We need to give right side value
                let tempNode = this.findMinNode(node.right);
                node.key = tempNode.key;
                node.right = this.deleteNode(node.right, tempNode.key)

            }

        }
        return node;
    }

    findMinNode(node){
        while(node.left != null){
            node = node.left;
        }
        return node;
    }

    inOrderTravesal(){
        const result = [];
        this.inOrder(this.root, result);
    }

    inOrder(node,result){
        if(node != null){
            this.inOrder(node.left, result); // Printing all left node
            result.push(node.key);
            this.inOrder(node.right, result);
        }
    }

    preOrderTravesal(){
        const result = [];
        this.preOrder(this.root, result);
    }

    preOrder(node,result){
        if(node != null){
            result.push(node.key);
            this.preOrder(node.left, result); // Printing all left node
            this.preOrder(node.right, result);
        }
    }

    postOrderTravesal(){
        const result = [];
        this.postOrder(this.root, result);
    }

    postOrder(node,result){
        if(node != null){
            this.postOrder(node.left, result); // Printing all left node
            this.postOrder(node.right, result);
            result.push(node.key);
        }
    }
    
}


