function maxPathCost(grid, row = 0, col= 0, memo={}){
    const pos = row +','+col;
    // return the cache result
    if(pos in memo)  return memo[pos];
    
    // check outbound of array and other condition
    if(row >= grid.length || col >= grid[0].length 
        // || grid[row][col] === 'X'// X or Wall or Snake
     )
     { 
        return -Infinity; // For max -Infinity, for min Infinity
    }

    // check if you have arrived at given location
    if(row === grid.length -1 && col == grid[0].length -1){
        return grid[row][col];
    }

 

    // meme[pos] = maxPathCost(grid, row + 1 , col, memo) + maxPathCost(grid, row, col +1, memo)

    // Extra line
    const rightpath = maxPathCost(grid, row +1, col, memo)
    const downtpath = maxPathCost(grid, row , col+1, memo)
    
    // memo[pos] = grid[row][col] +  Math.max( rightpath + downtpath)
    memo[pos] = grid[row][col] +  Math.max( rightpath, downtpath)
    

    
    return memo[pos];

}

// Home work to find Min

