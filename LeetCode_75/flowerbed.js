

// Check if given number of flower can be planted or not
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for(let i = 0; i < flowerbed.length; i++){
        // Check corrent flower bed position is empty 
        if(flowerbed[i] === 0){
            let isLeftEmpty = (i ===0 || flowerbed[i-1] === 0)
            let isRightEmpty = ((i == flowerbed.length - 1) || flowerbed[i+1] == 0)
            
            if(isLeftEmpty && isRightEmpty){
                flowerbed[i] = 1;
                count++;
                // If we found matching condition here we can direclty return
                if(count >= n){
                    return true;
                }
            }
        }
    }

    console.log(flowerbed);
    return count >= n;

};

const arr = [1,0,0,0,1]
const n = 2

console.log(canPlaceFlowers(arr,n));