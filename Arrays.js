//МАССИВЫ

let a = new Array(5); // новый массив с длиной = 5, но элементы отсутствуют (undefined)
console.log(a[0]);
let b = [1,2,3,4,5];
b.length = 2; // Изменение свойства массива length здесь приводит к уменьшению
            // массива до [1,2]
console.log(b);

//проход по массиву посредством for of:

let letters = [..."Hello world"];
let string = "";
for (let letter of letters){
    string+=letter;
}
console.log(string);

//проход по ключам и значениям массива

let everyother = "";
for (let [key,letter] of letters.entries()){
    if (key%2 === 0) everyother+=letter;
}
console.log(everyother);//каждая четная буква

//проход по массиву с использованием встроенной функции forEach()
let uppercase = "";
letters.forEach(letter => {
    uppercase+=letter.toUpperCase();
});
console.log(uppercase);//каждая буква в верхнем регистре

//map

let c = [1,2,3,4,5];
let d = c.map(value => value**2);
console.log(d);

//filter

let f = c.filter(value => value > 3);
console.log(f);

//reduce

let sum = c.reduce((x,y) => x+y);
console.log(sum);

//flat и flatMap

let g = [1,[2,[3,[4]]]];
console.log(g.flat(1));
console.log(g.flat(2));
console.log(g.flat(3));

let phrases = ["hello world","the defenitive guide"];
console.log(phrases.flatMap(phrase => phrase.split(" ")));

//concat

let h = [1,2,3];
console.log(h.concat(4,5));
console.log(h.concat([4,5],[6,7]));
console.log(h.concat(4,[5,[6,7]]));

//sort

let unsorted = [1,8,4,3,2];
unsorted.sort(function(a,b){
    return a-b;
});
console.log(unsorted);


