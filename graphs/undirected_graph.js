/**
 * 
 */

const edges = [
    ['b','a'],
    ['c','a'],
    ['b','c'],
    ['q','r'],
    ['q','s'],
    ['q','u'],
    ['q','t']
];


/**
 * To convert above edge to graph for adjection (object)
  const graph = { 
    b:['a','c'],
    a:['b','c'],
    c:['a']
}

Loop => Check if Key Does Not Exist, then add key => and push  both nodes

Q. Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.
    After that you can find node path etc.
    Take care of cycle via visted technique.


 */


function createGraphFromEdges(edges){
    const graph = {};
    for (const edge of edges) {
        const [a,b] = edge;
        if(!graph[a]){
            graph[a] = [];
        }
        if(!graph[b]){
            graph[b] = [];
        }

        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}   


function checkKeyExistInReurS(graph, start, dest, visisted = new Set()){
 if(start == dest){
    return true;
 }
 for(const neighbour of graph[start]){
    if(!visisted.has(neighbour)){
        visisted.add(neighbour)
        if(checkKeyExistInReurS(graph, neighbour, dest, visisted) == true){
            return true;
        }
    }
 }
 return false;
}

function getFinalOuput(edges){
    const graph = createGraphFromEdges(edges);

    console.log(graph);
    return checkKeyExistInReurS(graph,"b","q")
}
console.log(getFinalOuput(edges));