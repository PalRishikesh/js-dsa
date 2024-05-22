let data = [5,1,2,45,98,74,200];
let data2 = [50,11,22,545,98,74];


function customReverse(data, start, end){
    console.log(data);
    if(start <= end){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        customReverse(data, start+1, end -1 )
    }
}

customReverse(data,0, data.length -1)

// console.log(data2.reverse());