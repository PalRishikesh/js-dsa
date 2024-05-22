let data = [60,40,8,0,2,4,5,8,90]

let item = 5;
let availableIndex  = undefined;
for (let index = 0; index < data.length; index++) {
    if( data[index] === item){
        availableIndex = index;
        break;
    }
}

// console.log(availableIndex);
console.log(data.indexOf(5)) // if value is not present it will return -1
