//Sets and Maps
let s = new Set();
let s2 = new Set([1,true]);
let s3 = new Set(s);
let s4 = new Set("Mississippi"); // => "M","i","s","p"

s4.size; // => 4

let oneDigitPrimes = new Set([2,3,5,7]);
oneDigitPrimes.has(2); // => true
oneDigitPrimes.has("5"); // => false

let m1 = new Map();
let m2 = new Map([
    ["one",1],
    ["two",2]    
]);
let obj = {x: 1, y: 2};
let m3 = new Map(Object.entries(obj));

//RegExp
"JavaScript".search(/script/ui); // => 4
"Python".search(/script/ui); // => -1

console.log("JaVaScRiPt".replace(/javascript/ugi,"JS"));

let quote = /"([^"]*)"/g;
console.log('He said "stop"'.replace(quote,'<$1>')); // => He said <stop>

let quote2 = /"(?<quotedText>[^"]*)"/g;
console.log('He said "stop"'.replace(quote,'<$<quotedText>>')); // => He said <stop>

let string3 = "15 times 15 is 225";
string3.replace(/\d+/gu, n => parseInt(n).toString(16)); // => "f times f is e1"

let string4 = "15 times 15 is 225";
console.log(string4.match(/\d+/g));
console.log(string4.match(/\d+/));

//Date and time