/** Iterative  */

function reverseStringIterative(string){
    let reverse = "";
    let length = string.length - 1;
    while(length >=0){
        reverse = reverse + string[length];
        length = length - 1;
    }
    return reverse;
}
// console.log(reverseStringIterative("hello world!"));

function reverseStringRecurisve(string){
    console.log(string);
    if(string == ""){
        return string;
    }   

    
    
    let newSubString = string.substring(0, string.length - 1);
    let revesePart = reverseStringRecurisve(newSubString)

//     console.log("revesePart: ",revesePart);
//    console.log(string);
    // console.log("----");
    // console.log(" string[string.length-1]: ",string.length-1,string); // first time for unwinding 0, then 1 and so on. (Trying to get last value from undiwng array values)

    // let result  = string[string.length-1] + revesePart;
    // return result;

    let returnResult = string[string.length - 1] + revesePart
    return returnResult;
}


console.log(reverseStringRecurisve("Hello"));