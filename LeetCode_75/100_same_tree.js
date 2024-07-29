
var isSameTree = function(p, q) {
    // base condition
    /*
    if(p == null && q == null) return true;
    if(p == null || q == null) return false;
    if(p.val == q.val){
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false

    */

    // If both the value is null
    if(!p && !q) return true;
    // If any one is null or its value doesn't match
    if(!p || !q || p.val !== q.val) return false;
    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));

};

let p=[1,2,3], q = [1,2]

console.log(isSameTree(p,q))