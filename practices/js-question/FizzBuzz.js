// 1 to 100, multiple of 3 is Fizz, multiuple of 5 is Buzz, multiple of 5 and 3 is FizzBuzz

console.time("single1")

for (let index = 1; index <= 100; index++) {
       if( index % 3  == 0  && index % 5 == 0){
        console.log("FizzBuzz")
       }
       else if(index % 5 == 0){
        console.log("Buzz")
       }
       else if(index % 3 == 0){
        console.log("Fizz")
       }
       else{    
        console.log(index)
       }
}

console.timeEnd("single1")

// for (let i = 1; i <= 100; i++) console.log(i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i);
// console.time("single2")
// for(let i=1;i<=100;i++) console.log(i%3 == 0 && i%5==0 ? "FizzBuzz" : i%3 ==0 ? "Fizz" : i%5 ==0 ? "Buzz" : i)
// console.timeEnd("single2")