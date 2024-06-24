
var asteroidCollision = function(asteroids) {
    let stack = [];

    for (let asteriod of asteroids) {
        let explode = false;

        while(stack.length > 0 && asteriod <0 && stack[stack.length - 1] >0){
            const rightAsteriod = stack.pop();

            if(Math.abs(asteriod) === rightAsteriod){
                explode = true;
                break;
            }
            else if(Math.abs(asteriod) < rightAsteriod){
                asteriod = 0;
                stack.push(rightAsteriod);
                break;
            }
        }
        if(!explode && asteriod !==0){
            stack.push(asteriod);
        }
    }
    return stack;
};
