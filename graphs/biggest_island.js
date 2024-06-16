const graph = {
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
};

function biggestIsland(graph){
    const visisted = new Set();
    let largest = 0;

    function dfs(node){
        if(visisted.has(node)){
            return 0;
;        }
         visisted.add(node);
         let size  =1;
         // find the neighbour
         for(const neighbour of graph[node]){
            size = size + dfs(neighbour);
         }
         return size;
    }

    // Iterate over graph

    for (const node in graph) {
        if(!visisted.has(node)){
            const componentSize = dfs(node);
            if(componentSize > largest){
                largest = componentSize;
            }
        }
    }
    return largest;
}

console.log(biggestIsland(graph));