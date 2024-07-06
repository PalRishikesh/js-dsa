//js
function promiseFn(milliSecond){
    return new Promise((resolve, reject)=>{

        if(false){
            reject("error");
        }
        else{
           setTimeout(() => {
            return resolve("Success")
           }, milliSecond);
        }
    })
   
}

async function testPromise(){
    const data = await promiseFn(2000)
    console.log(data);
}
testPromise()



const input = "Welcome to smartsense";
    // Output:- "emocleW ot esnestrams"

function reverserChar(input){
    let newReverString = "";
    let wordSplit = input.split(" ");

    for(let i= 0; i< wordSplit.length; i++){
        let singleWords = wordSplit[i];
        for(let j = singleWords.length-1; j >=0; j-- ){
            newReverString += singleWords[j];
        }
        newReverString +=" ";
    }
    return newReverString;
}

// console.log(reverserChar(input));
// function runFunc(){
//     console.log("A" - 1);
//     console.log(2 + "-2" + "2");
//     console.log(typeof typeof null);
//     }
//     runFunc();
// Ankit Bhojani
// 4:18 PM
// (function(){
//     setTimeout(()=> console.log(1),101);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//     })();
// Ankit Bhojani
// 4:20 PM
// function test(){
//     x = 330;
//     console.log(x);
//     var x;
//     }
    // test()


    
/** How to upload large file with buffers
 * promise.all/ reace/etc
 * promise.serarlize promise.parallel
 * 
 * Find first tablle data is not present in second tables -> SELECT first_name, last_name
FROM Customers LEFT JOIN orders ON orders.customer_id == Customers.customer_id where orders.customer_id is NULL;
 */





const life = false;
const motivation = ()=>{
    const randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber <= 5) return true;
    return false;
}
while(life){
    let areYouMotivated = motivation()
    if(areYouMotivated) console.log("Well done Keep it up & Enjoy Life !");
    else areYouMotivated = true;
    if(areYouMotivated) console.log("Write Nice Code & Enjoy Life !");
}