
let faang = {
    name:"google",
    salary:function(){
        console.log("500K salary")
    }
}
let engineer = {
    empId:1234,
    task:function(){
        console.log("Task assigned");
    }
}

// Engineer is inheritance all the property of faang
// engineer.__proto__ = faang;
// console.log(engineer);
// engineer.salary();

// New way to inheritance

let engineerTwo  = Object.create(faang,{
    empId:{value:2}
})
// console.log(engineerTwo)
// console.log(engineerTwo.empId)
// engineerTwo.salary()

var log = console.log;
// console.log = function() {
   // Invoke the original method with an additional parameter
//    log.apply(console, [(new Date()).toString()].concat(arguments));
// };

// console.log("Hello World!")


// console.log('Start')

// setTimeout(()=>{
//     console.log('Timeout!');
// },0)

// Promise.resolve('PromIse!')
// .then(res => console.log(res));
// console.log('End')

// Aysnc await

const one=()=>Promise.resolve("One");

async function test(){
    console.log("Inside test function");
    const result = await one();
    console.log(result);
}
// console.log("Before calling test function");
// test();
// console.log("After calling test function");

// Before calling test function
// Inside test function
// After calling test function
// One


//
// console.log("Script start"); // Synchronous code

// setTimeout(function(){
//     console.log("setTimeout"); // Macro task
// },0);

// new Promise((resolve, reject)=>{
//     console.log("Promise constructor") // Synchronous code inside Promise constructor
//     resolve("Promise resolved")
// }).then(function(res){
//     console.log(res) // Micro task
// })

// async function asynFunc(){
//     console.log("asyncFunc start") // Synchronous part of the async function
//     await new Promise((resolve)=>{
//         console.log("Promise inside asyncFunc");
//         resolve("async/await resolved");
//     })
//     console.log("asyncFunc end") // This line is treated as micro task due to await
// }
// asynFunc();
// console.log("Script end") // Synchronous code



// const getValue = ()=>{
//     let score = 10;
//     return () => ++score;
// }

// const value = getValue(); // const value have a function reference not a value
// console.log(value()) // 11
// console.log(value()) // 12

// const getValue = ()=>{
//     let score = 10;
//     return () => score++;
// }

// const value = getValue(); // const value have a function reference not a value
// console.log(value()) // 10
// console.log(value()) // 11

function loadBalance(){
    let userBalance = 100;

    function addBalance(){
        let newValue = ++userBalance;
        return newValue;
    }

    return {addBalance};
}

// console.log(loadBalance().addBalance())
// const balance = loadBalance();
// console.log(balance.addBalance())
// console.log(balance.addBalance())

// Call, Apply, Bind

const person = {
    name:"Rishikesh",
    age: 28
};

function introduce(interest, hobby){
    console.log(`My Name is ${this.name} and I am ${this.age} years old. I like ${interest} and ${hobby}`)
}

introduce.call(person,'Math','Chess')
// My Name is Rishikesh and I am 28 years old. I like Math and Chess
introduce.apply(person,['Science','Painting'])
// My Name is Rishikesh and I am 28 years old. I like Science and Painting

// const boundIntroduce = introduce.bind(person,'English','Reading')
const boundIntroduce = introduce.bind(person,'English')
boundIntroduce('Reading Book');
// My Name is Rishikesh and I am 28 years old. I like English and Reading
// My Name is Rishikesh and I am 28 years old. I like English and Reading Book