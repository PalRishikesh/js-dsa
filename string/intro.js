// Create a Strigs
const string1 = new String("This is string way to assign");
const string2 =  "This is another way";
const string3 =  'This is another way';
const string4 = `This is string tild way
we can defined to new line and with template literate (${string2}) unlike other`;

console.log`Hello world`; // [ 'Hello world' ]

const firstName = 'Rishi';
const lastName = 'Pal';
const place = 'Mumbai'
// console.log`Hello Mr ${firstName} ${lastName} Welcome to ${place}`;  //[ 'Hello Mr ', ' ', ' Welcome to ', '' ] Rishi Pal Mumbai

function customLog(string, firstName, lastName, place){
    console.log(string,firstName, lastName, place) // [ 'Hello Mr ', ' ', ' Welcome to ', '' ] Rishi Pal Mumbai
    return;
}
// customLog`Hello Mr ${firstName} ${lastName} Welcome to ${place}`


// Check length
console.log(string1.length)

// Access Characters
console.log(string1[6]); 
// OR
console.log(string1.charAt(6)); 

// Modifiying, String in javascript are immutable, we can not change
string1[6] = "T"
console.log(string1); // No changes 

// replace method will return the new change string
const newString2 = string2.replace("another","some of the");
const newString3 = string2.replaceAll("is","it");
console.log(newString2);
console.log(newString3);

// concat

const newString = string2.concat(" this is new way adding more details");
console.log(newString); //This is another way this is new way adding more details

const someGap = "     Hello  World  ";

console.log(someGap.trim())

// Searching index

console.log(string1.indexOf("is"));
console.log(string1.lastIndexOf("is"));

console.log(string2.startsWith('This'));
console.log(string2.endsWith('y'));

// Substring
console.log(string3.substring(7,15)); //  another, end number is omited
console.log(string3.substring(7,-1)); // return the previous value ie: This is

console.log(string2.slice(-15,-1));

// Converting

const toBeConverted = 1; // true, null, undefined
console.log(String(toBeConverted));

const toConvert = {name:"Rishi"}
console.log(String(toConvert)); //[object Object], to convert object need to use JSON.stringify
console.log(JSON.stringify(toConvert));

console.log(string3.toUpperCase());
console.log(string3.toLowerCase())

// Find the ASCII values
console.log(string3.charCodeAt(0));
// To convert to string
console.log(String.fromCharCode(84));

const str1 = "Apple";
const str2 = "apple";

console.log(str1.localeCompare(str2)); // 1 here str1 is greater by captial A
console.log(str1.includes("le")); // true

// Split and Joing
console.log(string3.split(" "));

const arr =["apple","Banana"];
console.log(arr.join(" and  "));