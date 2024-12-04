const data = [1,2,4,8,1067,4,7,988,100]
// const operation = [[5],[6,9],[0],[7,45],[4,100],[8]]
const operation = [[5],[6,9],[0],[7,45]] // if single element means read or else write with current index to nth index at given value

const indexSum = [2,4,8]
function changeArray(data,operation){

    for (let index = 0; index < operation.length; index++) {
        if(operation[index].length == 1){
            //read
            console.log(data[operation[index][0]])
        }
        else{
            // write
            // data[operation[index][0]] = operation[index][1]
            let startIndex = operation[index][0];
            for (let j = startIndex; j < data.length; j++) {
                console.log("start: ",startIndex);
                console.log("j: ",j);
                
                data[j] +=operation[index][1];
            }

        }
        console.log(data)
    }
   
}

// changeArray(data,operation);


function readSum(data,indexSum){
    const sumArray = [];
    let sum=0;
    for (let index = 0; index < data.length; index++) {
        sum += data[index];
        sumArray.push(sum)
    }
    console.log(sumArray);
    for (const customIndex of indexSum) {
            console.log(sumArray[customIndex]);
            
    }
    
    
}

// readSum(data,indexSum);


function getPrime(n){
    if(n==2){
        return true;
    }
    if(n <=1){
        return false;
    }
    
    for (let index = 2; index*index <= n; index++) {
        if(n % index == 0){
            return false;
        }
    }
    return true;

}

console.log(getPrime(10));

function primeTillN(n){
    
    for (i = 0; i < n; i++) {
        const isPrime = getPrime(i);
        if(isPrime){
            console.log(i);
            
        }
    }
}

// primeTillN(100);




// let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
let arr= new Array(101).fill('T');
arr[0]='F'
arr[1]='F'
// console.log(arr);

function setTable(p){
    const startIndex = p*p;
    for (let index = startIndex; index <= arr.length; index =   index +  p) {
        
     
        arr[index] = 'F';
    
        
    }
}
function setArrayPrimie(arr){
    
    for (let index = 2; index < arr.length; index++) {
        
        if(arr[index] == 'F'){
            break;
        }
        
        setTable(index);
    }
    
    
}


setArrayPrimie(arr)

let newArr = arr.forEach((value,index)=>{
    // console.log(value, index);
    
    if(value == 'T'){
         console.log(index);
        
    }
})


