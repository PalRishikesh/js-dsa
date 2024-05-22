let data = [9,44,1,5,7,6,8,10,25,65];
// for(let i=0; i< data.length; i++){
//     document.write(`${data[i]} <br>`)
// }

//Accesing third element of array
// document.write(data[3])

function getElement(){
    let el = document.getElementById("textBox").value;
    if(el < 0){
        alert("Please give positive length")
    }
    else if((el < data.length && typeof parseInt(el) === 'number')){
        alert(data[el])
    }
    else{
        alert("Please give proper length")
    }
}


let data1= ["one","two","three","four","five","six","seven","eight"];
let i  = 0;
while(i < data1.length){
    console.log(data1[i]);
    i++;
}
