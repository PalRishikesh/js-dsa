/**
 * ****
 * ****
 * ****
 * ****
 */

let n=4;
for(let i=1; i<=n; i++){
    let str = "";
    for(let j=1;j <= n; j++){
        str +="* ";
    }
    console.log(str);
}

console.log("=======================");

for(let i=1; i<=n; i++){
    let str = "";
    for(let j=1;j <= i; j++){
        str +="* ";
    }
    console.log(str);
}

console.log("=======================");

for(let i = 1; i<=n; i++){
    let str="";
    for(let j=(n-i)+1; j>0; j--){
        str +="* ";
    }
    console.log(str);
}

console.log("=======================");

/**
 * 1
 * 1 2
 * 1 2 3 
 * 1 2 3 4
 */

for(let i = 1; i<=n; i++){
    let str="";
    for(let j=1; j<=i; j++){
        str += j+" ";
    }
    console.log(str);
}

console.log("=======================");

/**
 * *
 * **
 * ***
 * ****
 * ***
 * **
 * *
 */


for(let i = 1; i<=2*n-1; i++){

    let str="";
    let cols =  i > n ?  n - (i-n)  : i;
    for(let j=1; j<=cols; j++){
        str += "* ";
    }
    console.log(str);
}


console.log("=======================");

/**
 *    *
 *   **
 *  ***
 * ****
 */

for(let i = 1; i<=n; i++){
    let str="";
    let j=1;
    for(;j<=n-i;j++){
        str +=" ";
    }
    for(let k=j;k<=n;k++){
        str +="*";
    }
    console.log(str);
}
console.log("=======================");

for(let i = 1; i<=n; i++){
    let str="";
    let j=1;

    for(; j<i; j++ ){
        str +=" ";
    }
    for(let k=i; k<=n; k++){
        str +="*"
    }

    console.log(str);
}

console.log("=======================");

/**
 * *****
 * *   *
 * *   *
 * *   *
 * *****
 */



for(let i = 1; i<=n; i++){
    let str="";
    for(let j=1; j<=n; j++){
        if(j == 1 || j ==4 || i ==1 || i==4){
            str +="*";
        }
        else{
            str +=" ";
        }
    }
    console.log(str);
}

console.log("=======================");

/**
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */


for(let i = 1; i<=n; i++){
    let str="";
    let starPoint = n - i;
    for(let j=1; j<=starPoint; j++){
        str +="\xa0";
    }
    for(let k=1; k <=i+i; k++){
        str +="*";
    }
    console.log(str);
}

console.log("=======================");

/**
 *     *
 *    **
 *    ***
 *   *****
 *  *******
 * *********
 *  *******
 *   *****
 *    ***
 *     **
 *     *
 */

for(let i=0; i <= 2*n; i++){
    let str="";

    let cols =  i > n ?  n - (i-n)  : i;
    let spaceCount =  n - cols; 
    for(let j = 1; j <= spaceCount; j++){
        str +=" ";
    }
  
    for(let k=cols; k<=n; k++){
        str +="*"
    }
    console.log(str);
}



n = n*2;
for(let row=0; row<=n;row++){
    let str="";

    for(let col =0 ; col <=n ;col++){
        let atIndex = Math.min(Math.min(row,col), Math.min(n-row, n-col));
        str +=atIndex;
    }

    console.log(str);
}