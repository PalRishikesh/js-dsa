height = [1,8,6,2,5,4,8,3,7,150]

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while(left < right){
        min = Math.min(height[left],height[right])
        let minCalutaction = min * (right - left);
        max = Math.max(max, minCalutaction);
        if(height[left] < height[right]){
            left++;
        }
        else if(height[right] < height[left]){
            right--;
        }
        else{
            left++;
            right--;
        }

    }
    return max;
}

console.log(maxArea(height));