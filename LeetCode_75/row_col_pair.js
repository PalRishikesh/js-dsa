// let grid = [[3,2,1],[1,7,6],[2,7,7]];
// let cols = [];
// for(let index= 0; index < grid.length; index++){
//     for(let j= 0; j < grid.length; j++){
//         cols.push(grid[j][index])
//     }
// }
// console.log(cols);

var equalPairs = function(grid) {
    
    const n = grid.length;
    const rowMap = new Map()

    for(let i=0; i<n; i++){
        const rowStr = grid[i].join(',');
        rowMap.set(rowStr,(rowMap.get(rowStr) || 0) +1) // Making a single string for rows
    }

    let count = 0;

    for(let i = 0; i<n; i++){
        let colArr=[];
        for(let j=0; j<n; j++){
            colArr.push(grid[j][i])
        }

        const colStr = colArr.join(',');
        if(rowMap.has(colStr)){
            count +=rowMap.get(colStr);
        }

    }
    return count;

};