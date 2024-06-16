/*
Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
W represents water and L represents land.
The function should return the size of the smallest island.
An island is a vartically or hoizontally connected region of land.

*/

function maxIslandSize(grid){
    const rows = grid.length
    const cols = grid[0].length;
    const visisted = new Set();
    let maximumSize  = -1; 

    function dfsSize(r,c){
        let size =  1;
        const pos = r+','+c;
        if( r < 0 || r>=rows || c < 0 || c >= cols || grid[r][c] =="W" || visisted.has(pos)){
            return 0;
        }
        visisted.add(pos);
  
        size += dfsSize(r-1,c)
        size += dfsSize(r+1,c)
        size += dfsSize(r,c-1)
        size += dfsSize(r,c+1)
        return size;
    }


    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
           const pos = r+','+c;
           if(grid[r][c] == "L" && !visisted.has(pos)){
                let size = dfsSize(r, c);
                console.log("size: ",size);
                if(size > maximumSize){
                    maximumSize = size;
                }
           }
        }
    }
    return maximumSize;
}

function minIslandSize(grid){
    const rows = grid.length
    const cols = grid[0].length;
    const visisted = new Set();
    let smallestSize = Infinity; // -1

    function dfsSize(r,c){
        let size =  1;
        const pos = r+','+c;
        if( r < 0 || r>=rows || c < 0 || c >= cols || grid[r][c] =="W" || visisted.has(pos)){
            return 0;
        }
        visisted.add(pos);
  
        size += dfsSize(r-1,c)
        size += dfsSize(r+1,c)
        size += dfsSize(r,c-1)
        size += dfsSize(r,c+1)
        return size;
    }


    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
           const pos = r+','+c;
           if(grid[r][c] == "L" && !visisted.has(pos)){
                let size = dfsSize(r, c);
                console.log("size: ",size);
                if(smallestSize > size){
                    smallestSize = size;
                }
           }
        }
    }
    return smallestSize;
}



let graph = [
    ['L','W','W','L','W'],
    ['W','W','W','L','L'],
    ['W','L','W','L','W'],
    ['W','W','W','W','W'],
    ['W','W','L','L','L'],
]

console.log(minIslandSize(graph));
console.log(maxIslandSize(graph));