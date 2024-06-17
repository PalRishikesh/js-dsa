function countPath(grid, row = 0, col= 0, memo={}){
    const pos = row +','+col;
    
    // check outbound of array and other condition
    if(row >= grid.length || col >= grid[0].length || grid[row][col] === 'X'){ // X or Wall or Snake
        return 0;
    }

    // check if you have arrived at given location
    if(row === grid.length -1 && col == grid[0].length -1){
        return 1;
    }

    // return the cache result
    if(pos in memo){
        return memo[pos];
    }

    // meme[pos] = countPath(grid, row + 1 , col, memo) + countPath(grid, row, col +1, memo)

    // Extra line
    const rightpath = countPath(grid, row +1, col, memo)
    const downtpath = countPath(grid, row , col+1, memo)
    memo[pos] = rightpath + downtpath
    

    
    return memo[pos];

}