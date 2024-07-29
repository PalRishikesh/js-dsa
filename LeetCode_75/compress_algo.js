var compress = function(chars) {
    let index = 0;
    let i=0;
      while(i < chars.length){

        console.log(chars[i]);
        let j=i;
        
        while( j < chars.length && chars[i] == chars[j]){
            console.log("j: ",j);
            j++;
        }

        let count = j-i;
        console.log("count : ",count);

        chars[index++] = chars[i];
        if(count > 1){
            for(const str of count.toString()){
                chars[index++] = str;
            }
        }
        i = j;
        // i++;
    }
    chars.length = index;
    return chars;

    
};


let num= ["a","a","b","b","b","b","b","b","b","b","b","b","b","b"];

console.log(compress(num))