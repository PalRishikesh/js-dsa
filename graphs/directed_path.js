/**
 * Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest,
 * otherise return false.
 * Example 1
 * Input: start =1, dest = 3;
 * Ouput: true
 * Explanation: There is a directed path 1 -> 2 -> 3
 * Example 2:
 * 
 * Input: start = 1, Dest = 4
 * Output: false
 * Explanation: There is no path from 1 to 4
 * 
 */

const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
};


function hasPathDFS(graph, start, dest){
    const stack = [start];
    const visisted = new Set();

    while(stack.length > 0){
        const node = stack.pop();
        console.log(node);
        if(node == dest){
            return true;
        }
        if(!visisted.has(node)){
            visisted.add(node);
            for(const neighbour of graph[node]){
                stack.push(neighbour);
            }
        }
    }
    return false
}



// console.log(hasPathDFS(graph,"a","f"));

function hasPathBFS(graph, start, dest){
    const queue = [start];
    const visisted = new Set();
    while(queue.length > 0){
        const node = queue.shift();
        console.log(node);
        if(node == dest){
            return true;
        }
        for(const neighbour of graph[node]){
            if(!visisted.has(neighbour)){
                visisted.add(neighbour);
                queue.push(neighbour)
            }
            
        }
        
    }
    return false;
}
// console.log(hasPathBFS(graph,"a","f"));

// Recursive



function hasPathRec(graph, start, dest, visisted = new Set()){
    if(start == dest){
        return true;
    }
    // Taking neighbour nodes
    for(const neighbour of graph[start]){
        if(!visisted.has(neighbour)){
            visisted.add(neighbour)
            if(hasPathRec(graph, neighbour, dest, visisted) == true){
                return true;
            }
        }
       
    }
    return false;
}
console.log(hasPathRec(graph,"a","f"));
