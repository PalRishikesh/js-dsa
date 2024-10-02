
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// The Hamming distance between two equal-length strings of symbols is the number of positions at which the corresponding symbols are different.[1]
// "karolin" and "kathrin" is 3.
// "karolin" and "kerstin" is 3.
// "kathrin" and "kerstin" is 4.
// 0000 and 1111 is 4.
// 2173896 and 2233796 is 3.

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
// console.log(hammingDistance("Hello","Heloi"));

// 2nd Variation with bits return 
function hammingDistanceBit(x,y){
    // Get the bit by using toString(2) method
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

// console.log(hammingDistanceBit(9,5));