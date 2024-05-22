const a = [1,2];
const b = [3,4,5,6];

function cartesianProduct(a,b){
    let productArray = [];
    for(let i= 0;i < a.length; i++){
        for(let j=0;j < b.length; j++){
            productArray.push([a[i],b[j]]);
        }
    }
    return productArray;
}


console.log(cartesianProduct(a,b));