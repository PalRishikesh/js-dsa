
function color(){
    let colorName = "Blue";
    console.log(colorName);
}

function days(){
    color()
}

function fruits(){
    days()
}

function topFunction(){
    fruits();
}

// topFunction()





function test(x){
    console.log(x); // Head recursion
    if(x>0){
        test(x-1);
    }
    console.log(x); // Tail recursion
}

test(5)