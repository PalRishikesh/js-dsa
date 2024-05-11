let data1 = [60, 40, 8, 20, 2, 4, 5, 8, 90];
let data2 = [101,102,108,109,115,150];
let data3 = [];

for (let index = 0; index < data1.length; index++) {
    //  data3.push(data1[index])
    data3[index] = data1[index];
}

for (let index = 0; index < data2.length; index++) {
    data3[ data1.length +  index] = data2[index];
}

// console.log(data3);

// reverse
// data3.reverse();
// console.log(data3);


let data4 =[3,5,9]
let data5 = [1,8,9,22]
let data6 = [];

let d4=0;
let d5=0;
let d6=0;

while(d4 < data4.length && d5 < data5.length){
    if(data4[d4] < data5[d5]){
        data6[d6] = data4[d4];
        d6++;
        d4++;
    }
    else{
        data6[d6] = data5[d5]
        d6++;
        d5++;
    }
}

while(d4 < data4.length){
    data6[d6] = data4[d4];
    d6++;
    d4++;
}

while(d5 < data5.length){
    data6[d6] = data5[d5];
    d6++;
    d5++;
}
console.log(data6);
