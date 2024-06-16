
const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
};


function depthFSIterative(graph, start){
    const stack = [start];
    const visisted = new Set();

    while(stack.length > 0){
        const node = stack.pop();
        console.log(node);
        if(!visisted.has(node)){
            visisted.add(node);
            // Find its neighbour
            for(const neighbour of graph[node]){ // access like object
                if(!visisted.has(neighbour)){
                    stack.push(neighbour);
                }
            }
        }
    }
    return visisted;
}


function depthFSR(graph, start, visisted = new Set()){
    if(!visisted.has(start)){
        visisted.add(start);
        for(const neighbour of graph[start]){
             depthFSR(graph, neighbour, visisted);
        }
    }

    return visisted;
}

console.log(depthFSIterative(graph, "a"));
// console.log(depthFSR(graph, "a"));

