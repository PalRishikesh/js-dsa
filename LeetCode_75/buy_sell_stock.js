


var maxProfit = function (prices) {
    //Take maxProfileValue as 0;
    let maxProfileValue = 0;
    // By default buy, sell will take on 1st array values
    let buyingIndex = 0;
    let sellingIndex = 0;

    //Loop through end of array and incrase selling index to check each array value of selling price
    while(sellingIndex < prices.length){

        // If buying price is greater then bring buying price index to current index (selling price)
        // Other wise increae selling price to found the maximum value of stock price
        if(prices[buyingIndex] > prices[sellingIndex]){
            buyingIndex = sellingIndex;
        }

        // Calculate profit
        let profit = prices[sellingIndex] - prices[buyingIndex];

        // Store only max value
        maxProfileValue = Math.max(maxProfileValue, profit);
        console.log(profit);

        // Every time selling index increase
        sellingIndex++;
    }
    return maxProfileValue;
}

let arr = [7,1,5,3,6,4,0,8];

// console.log(maxProfit(arr));



var maxProfitSimple = function (prices) {
    let currMin = prices[0];
    let currMax = 0;
    for (let index = 0; index < prices.length; index++) {
        currMin = Math.min(prices[index], currMin);
        let profit =  prices[index] - currMin;
        // console.log(prices[index], currMin,profit);
        currMax = Math.max(currMax, profit)
        
    }
    return currMax;
}

console.log(maxProfitSimple(arr));