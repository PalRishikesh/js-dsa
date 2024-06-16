// const edges = [
//     ['b','a'],
//     ['c','a'],
//     ['b','c'],
//     ['q','r'],
//     ['q','s'],
//     ['q','u'],
//     ['q','t']
// ];

const edges = [
    ['a','b'],
    ['b','c'],
    ['c','d']
];




function createGrphFromEdge(edges){
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

// Main function

// let graph = {
    
//     'a':{'b':1, 'c':4},
//     'b':{'a':1, 'c':1, 'd':5},
//     'c':{'a':4, 'b':2, 'd': 1},
//     'd':{'b':5, 'c':1}
// }
let start='a';
let dest = 'c';
function shortestPath(edges, start, dest){
    const graph = createGrphFromEdge(edges);
console.log(graph);




    const queue = [[start, 0]];
    const visisted = new Set([start]);
    while(queue.length > 0){
        const [node, distance ] = queue.shift();
        console.log(node, distance);
        if(node == dest){
            return distance;
        }

        //
        for(const neighbour of  graph[node]){
            if(!visisted.has(node)){
                visisted.add(neighbour);
                queue.push([neighbour, distance + 1]);
            }
        }

    }
}

console.log(shortestPath(edges, start, dest));

// https://www.youtube.com/watch?v=0X-1_UYeKNE