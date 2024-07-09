

function printSubStr(str, low, high){
    for(let i = low; i <= high; ++i){
        console.log(str[i]);
    }
}


function longestPalSubstr1(str){

    let start = 0;
    let maxLength = 1;

    for(let i=0; i<str.length; i++){
        for(let j=i; j< str.length; j++){

            let flag = 1;

            let kLength = (j - i + 1)/2;
            console.log("kLength: ",kLength);
            for(let k = 0; k < j - i + 1; k++){
                // console.log("i: ",i, " j: ",j," kLength: ",kLength);
                let iPlusK = str[i+k];
                let jMinusK = str[j-k];
                // console.log(iPlusK, jMinusK);
                if(iPlusK != jMinusK){
                    // console.log("Not equal to ");
                    flag = 0;
                }
                
                if(flag != 0 && (j - i + 1) > maxLength){
                    console.log("k");
                    start = i;
                    maxLength= j - i + 1;
                }
            }
        }
    }
    console.log(str, start, start + maxLength -1);
    // printSubStr(str, start, start + maxLength -1);

}



let  str = "lgg"
longestPalSubstr1(str);

