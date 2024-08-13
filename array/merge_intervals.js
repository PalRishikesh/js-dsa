var merge = function(intervals) {
    let finalArr=[];
    for (let i = 0; i < intervals.length; i++) {
        
        intervals = intervals.sort((a,b) => a[0] -b[0]);
        let arrData = [];
        for (let j = 0; j < intervals[i].length; j++) {
            // Check next value is there r not and check current current index is last or not and finally check current value is greater than or equal to next i iteration
            if(intervals[i+1] != undefined && j == intervals[i].length-1 && intervals[i][j] >= intervals[i+1][0]){
                i++;
                
            }
            arrData.push(intervals[i][j])
        }
        finalArr.push(arrData);
        
    }
    return finalArr;
    
};

// let arr = [[1,3],[2,6],[8,10],[9,18]]


// console.log(merge(arr))

let arr= [[1,4],[2,3]]

// var merge = function(intervals) {
//     intervals = intervals.sort((a,b) => a[0] -b[0]);
//     const result = []
//     let pair = intervals[0]
//     for(const i of intervals){
//         if(pair[1] >= i[0]){
//             pair[1] = Math.max(i[1], pair[1]);
//         }
//         else{
//             result.push(pair);
//             pair = i
//         }
//     }
//     result.push(pair);
//     return result;
// };


var merge = function(intervals) {
    intervals = intervals.sort((a,b)=>a[0]-b[0]);

    const finalArr = [];
    let pair = intervals[0];
    for (const i of intervals) {
        console.log(i);
        if(pair[1] >= i[0]){
            pair[1] = Math.max(pair[1], i[1]);
            
        }
        else{
            finalArr.push(pair);
            pair = i
        }
        
    }
    // Add last element
    finalArr.push(pair);
    return finalArr;
}


let arr2 = [[1,3],[2,6],[8,10],[12,18]]


console.log(merge(arr2))