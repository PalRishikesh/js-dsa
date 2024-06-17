/*
Coin change proble, were you need to determine if it's possible to form a specific amount using any combination of elements from a given set, which can be used to unlimited number of times.

sumPossible(8,[5,12,4]); -> true
sumPossible(103,[6,20,1]); -> true
sumPossible(8,[5,3,4]); -> true
sumPossible(15,[4,6,10]); -> false

*/



 /** Self written code working only for some cases */  
function coinSumMemoSelfCode(value, arr){

    console.log(value, arr);
   if(arr.length == 0){
    return false;
   }
    let newArray = [];
    let newValue ;
    for(let i=0; i < arr.length; i++){
        newValue = arr[i];
        if(arr[i] - value >= 0){
            if(arr[i] - value == 0){
                return true;
            }
            
        }
        newArray.push(Math.abs(arr[i]))
    }
     return coinSumMemoSelfCode(newValue, newArray)
}


let value = 8;
let arr = [5,15,4];
// console.log(coinSumMemoSelfCode(value, arr));


function sumPossible(amount, numbers, memo={}){
    if(amount in memo) return memo[amount];
    if(amount == 0) return true;
    if(amount < 0) return false;
    
    for(const num of numbers){
        const returnSum = sumPossible(amount - num, numbers, memo);
        if(returnSum == true){
            memo[amount] = true;
            return true;
        }
    }
    memo[amount] = false;
    return false;

}

// console.log(sumPossible(value, arr));



function minimumCoinCount(coins, amount, memo={}){
    if(amount in memo) return memo[amount];
    if(amount === 0) return 0;
    if(amount < 0) return -1;
    let minCoinsCount = Infinity;

    for(const coin of coins){
        const result = minimumCoinCount(coins, amount - coin, memo);
        if(result != -1){
            minCoinsCount = Math.min(minCoinsCount, result + 1);
        }
    }


    // for(const coin of coins){
    //     let recentCount = 1 + minimumCoinCount(coins, amount - coin, memo);
    //     console.log(recentCount);
    //     minCoinsCount = Math.min(recentCount, minCoinsCount)
    //     console.log(minCoinsCount);
    // }

    memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount

    return memo[amount];

}

console.log(minimumCoinCount(arr,value));
