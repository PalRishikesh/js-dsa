// function climStair(n){
//     if( n <= 2){
//         return n;
//     }

//     return climStair(n-1) * climStair(n-2)
// }

// console.log(climStair(3))


function climStair(n){
   const noOfWays = [1,2];
   for(let i=2; i<n; i++){
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];

   }
   return noOfWays[n-1]
}

console.log(climStair(5))