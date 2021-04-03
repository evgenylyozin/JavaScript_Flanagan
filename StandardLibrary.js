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
let now = new Date(); //Текущее время

let epoch = new Date(0); // Полночь, 1 января 1970 год, гринвичское время
console.log(epoch);

let century = new Date(2100,0,1,2,3,4,5);
console.log(century);

let d = new Date();
console.log(new Date(d.setFullYear(d.getFullYear()+1)));

//Классы ошибок
class HTTPError extends Error {
    constructor(status, statusText, url) {
        super(`${status} ${statusText}: ${url}`);
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }
    get name() { return "HTTPError"; }
}

let error = new HTTPError(404,'Not Found', "http://example.com/");
console.log(error.status);
console.log(error.message);
console.log(error.name);

//API интерфейс Console
console.assert(false,"Assert test");

const obj1 = {x: 1,y: 2};
const obj2 = {x: 3, y: 4};
const objArray = [obj1,obj2];
console.table(objArray);

console.trace('test');

console.time("test");
console.timeLog("test");
console.timeEnd("test");

console.log("%O \n%O", obj1, obj2);

//URL

let url = new URL("https://example.com:8000/path/name?q=term#fragment");
console.log(url.href);
console.log(url.origin);
console.log(url.protocol);
console.log(url.host);
console.log(url.hostname);
console.log(url.port);
console.log(url.pathname);
console.log(url.search);
console.log(url.hash);

let url2 = new URL("https://example.com/search");
url2.search; // => пока пусто
url2.searchParams.append("q","term"); //добавим параметр поиска
url2.search; // => "?q=term"
url2.searchParams.set("q","x");
url2.search; // => "?q=x"

//Таймеры
setTimeout(() => {console.log("Ready...");},1000);
setTimeout(() => {console.log("Set...");},2000);
setTimeout(() => {console.log("Go!");},3000);

let clock = setInterval(
    () => {
        console.clear;
        console.log(new Date().toLocaleTimeString());
    }, 1000);
setTimeout(()=>{clearInterval(clock);},10000);