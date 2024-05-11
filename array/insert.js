
let data = [60,40,8,0,2,4,5,8,90]
let newElement = 50;
let positionElement = 2;

// console.log(data);

for (let index = data.length-1 ; index >=0; index--) {
//   console.warn(data[index])
    // Checking postion greate then or equal to current index shift to right side
    if(index >= positionElement){
        data[index+1] = data[index];
        if(index == positionElement){
            data[index] = newElement;
        }
    }
}
// console.log(data);

function insertElement(){

    let newElement = parseInt(document.getElementById("textValue").value);
    let positionElement = document.getElementById("textPosition").value;;
    for (let index = data.length-1 ; index >=0; index--) {
        //   console.warn(data[index])
            // Checking postion greate then or equal to current index shift to right side
            if(index >= positionElement){
                data[index+1] = data[index];
                if(index == positionElement){
                    data[index] = newElement;
                }
            }
        }
        console.log(data);
}


// Inbuilt Js function to insert the value
console.log(data);
data.splice(2,2,420); // Position , delete element, add element
console.log(data);