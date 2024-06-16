const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
};



function connectIsLand(graph){
    console.log(Object.entries(graph));
    const visisted = new Set();
    let count = 0;

    function dfs(node){
        if(!visisted.has(node)){
            visisted.add(node);
            for (const neighbour of node) {
                dfs(neighbour);
            }
        }
    }


    for(const node in graph){
        // console.log("Node: ",node[0]);
        if(!visisted.has(node)){
            dfs(node);
            count++;
        }
    }
    return count;
}


console.log(connectIsLand(graph));