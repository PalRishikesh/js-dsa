
var isValidBST = function(root) {
        // function recurse(root, min, max){
        //     // base case
        //     if(root == null) return true;

        //     // If left is greater and right is less return false
        //     if((root.val >= max || root.val <= min)) return false;
        //     // First min will be same root will max, Second min will be root max will be same
        //     return recurse(root.left, min, root.val) && recurse(root.right, root.val, max)
        // }

        // return recurse(root, -Infinity, Infinity)


        const queue = [[root, -Infinity, Infinity]];

        while(queue.length > 0){
            const [node, left, right] = queue.shift();
            if(node.val <= left || node.val >= right) return false;
            if(node.left) queue.push([node.left, left, node.val]);
            if(node.right) queue.push([node.right, node.val, right]);

        }
        return true;

        
};