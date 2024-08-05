function hammingDistance(x,y){
    if(x.length != y.length) return new Error("Invalid string");

    let distance = 0;
    for (let index = 0; index < x.length; index++) {
        if(x[index] != y[index]){
            distance++;
        }
        
    }
    return distance;
}
// console.log(hammingDistance("Hello","Helli"));

// 2nd Variation with bits return 


function hammingDistanceBit(x,y){
    x = x.toString(2)
    y = y.toString(2)
    console.log(x);
    console.log(y);
    if(x.length > y.length){
        while(y.length != x.length){
            y ="0"+y;
        }
    }
    else{
        while(x.length != y.length){
            x="0"+x;
        }
    }

    let distance = 0;
    for (let index = 0; index < x.length; index++) {
        if(x[index] != y[index]){
            distance++;
        }
        
    }
    return distance;
}

console.log(hammingDistanceBit(9,5));