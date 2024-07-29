
/*

var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right){
        let currentHeight = Math.min(height[left], height[right]);
        let currentWidth = right - left;
        let currentArea = currentHeight * currentWidth;
        maxWater = Math.max(maxWater, currentArea);

        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxWater;
}

*/

var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length -1;
    
    while (left < right) {
        
        let minHeight = Math.min(height[left], height[right]);
        let width = right - left;
        const waterStore = minHeight * width;
        maxWater = Math.max(waterStore, maxWater);

        if(height[left] < height[right]){
            left++;
        }
        else{
            right--;
        }
    }

    return maxWater;
}


let height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height));
