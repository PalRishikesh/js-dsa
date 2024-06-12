// breadth

const treeSumWithBreadthFirst=(root)=>{
    if(root == null){
        return 0;
    }
    const queue = [root];
    let sum = 0;
    while(queue.length > 0){
        const node = queue.shift()
        sum += node.key;
        if(node.left != null){
            queue.push(node.left);
        }
        if(node.right != null){
            queue.push(node.right)
        }
    }
    return sum;
}

// Depth first approach

const treeSumWithDepth=(root)=>{
    if(root === null){
        return 0;
    }
    return root.key + treeSumWithDepth(root.left) + treeSumWithDepth(root.right);
}

