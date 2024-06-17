
function fibTab(n){
    if(n <=1 ) return n;
    const table = Array(n+1).fill(0);
    table[1] = 1
    console.log(table);

    for(let i=2 ; i <=n ; i++){
        table[i] = table[i-1] + table[i-2];
        // [0,1, _ (1+0)] final will be [0,1,1] 2nd
        // [0,1,1,_ (1+1)] final will be [0,1,1,2] 3rd
    }

    return table;
}

console.log(fibTab(6));