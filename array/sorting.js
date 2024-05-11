let data = [40,30,12,25];

for (let index = 0; index < data.length; index++) {
    for (let indexJ = 0; indexJ < data.length; indexJ++) {
        // console.log(indexJ);
        // if(data[indexJ+1] < data[indexJ]){
        //     let temp = data[indexJ];
        //     data[indexJ] = data[indexJ+1];
        //     data[indexJ+1] = temp;
        // } 
        if(data[indexJ+1] < data[indexJ]){
            let temp = data[indexJ];
            data[indexJ] = data[indexJ+1];
            data[indexJ+1] = temp;
        } 
    }
}

console.log(data);