let money = 100;

let totalApple = 0;

function buyApple(amount){
    if(amount >=0){
        totalApple += 1;
        amount -=10;
        console.log("You have bought " + totalApple + " apple and balance money is "+amount);
        buyMore(amount)
    }
}

function buyMore(x){
    if(x >= 10){
        buyApple(x);
}
}

// buyApple(money);


