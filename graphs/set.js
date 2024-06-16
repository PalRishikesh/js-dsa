
const set = new Set();
const arr1 = [1,2];
const arr2 = [1,2];

set.add(JSON.stringify(arr1))
set.add(JSON.stringify(arr2))

console.log(set.has([1,2]));
console.log(set.has(JSON.stringify([1,2])))

/** we can put [] as single char in set  */

const start = 'az';
const newSet = new Set(start);
const newSetv2 = new Set([start]);
console.log(newSet);
console.log(newSetv2);

// Set(2) { 'a', 'z' }
// Set(1) { 'az' }




function getFibonacci(n){
    let n1= 0;
    let n2 = 1;

    let testArry = [0,1];
    for(let i = 2; i<n; i++){
        let temp = n1 + n2;
        n1 = n2;
        n2 = temp;
        testArry.push(temp);
    }
    return testArry;
}

// console.log(getFibonacci(10));



function printPattern(rows){
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row +=i;
        }
        console.log(row);
    }
}

printPattern(5)




function printTrianglePattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let row = "";
      for (let j = 1; j <= i; j++) {
        row += j; // Append the current number (j) to the string
      }
      // Pad the row with spaces for proper right triangle alignment
      console.log(row.padStart(rows * 2 - 1, ' '));
    }
  }
  
  printTrianglePattern(4); // Change the argument to print more rows
  

  // To make store in set with unique value 

  let r=2;
  let c = 3;

  const pos = r+','+c;
  console.log(pos)
  console.log(typeof  pos);