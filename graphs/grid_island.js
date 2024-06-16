

function islandCount(grid){
 
    const rows = grid.length;
    const cols = grid[0].length;

    const visisted = new Set();
    let count = 0;

    function dfs(r,c){
        const pos = r+','+c;
        console.log(pos);
        // Return if any condition matches
        if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] == 'W' || visisted.has(pos)){
            return;
        }

        visisted.add(pos)
        dfs(r-1, c)
        dfs(r+1, c)
        dfs(r, c-1)
        dfs(r, c+1)
        
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const pos = r+','+c;
            if(grid[r][c] == 'L' && !visisted.has(pos)){
                
                count++;
                dfs(r,c);
            }
        }
    }
    return count;
}



let graph = [
    ['L','W','W','L','W'],
    ['W','W','W','L','L'],
    ['W','L','W','L','W'],
    ['W','W','W','W','W'],
    ['W','W','L','L','L'],
]

console.log(islandCount(graph));