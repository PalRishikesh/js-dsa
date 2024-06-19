
var kidsWithCandies = function(candies, extraCandies) {
    

    let returnArray = [];

    // function maxValueFromArray(arr){
    //     let maxValue = 0;
    //     for(let i = 0 ;i < arr.length ; i++){
    //         if(arr[i] > maxValue){
    //             maxValue = arr[i];
    //         }
    //     }
    //     return maxValue;
    // }

    // let maxValue = maxValueFromArray(candies);
    // console.log(maxValue);
    // for(let i= 0; i<candies.length; i++){
    //     if(candies[i] + extraCandies >= maxValue){
    //         returnArray.push(true);
    //     }
    //     else{
    //         returnArray.push(false)
    //     }
    // }

    // return returnArray;


    let max = Math.max(...candies);
    // return candies.map(el=> el+extraCandies>=max);
    return candies.map((el)=>{
        return el + extraCandies >= max;
    })



}
const candies = [12,1,12]
const  extraCandies = 10


console.log(kidsWithCandies(candies, extraCandies))