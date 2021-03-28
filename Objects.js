//Создание объектов

//Объектный литерал

let empty = {};
let point = { x: 0, y: 0 };
let p2 = { x: point.x, y: point.y+1};

//Создание через new

let o = new Object();
let a = new Array();
let d = new Date();
let m = new Map();

//Object.create()

let o1 = Object.create({ x: 1, y: 2 });
let o2 = Object.create(null); // Создание объекта, не наследующего ни свойства, ни методы (нет прототипа)!
let o3 = Object.create(Object.prototype); // Создание пустого объекта, наследующего от Object

//Наследование

let o12 = {};
o12.x = 1;
let p = Object.create(o12);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
console.log(f);
console.log(q.x+q.y);

//Варианты проверки наличия свойства в объекте

let someObj = { x:1, };
"x" in o; //true
"toString" in o; //true

// hasOwnProperty() возвращает false для унаследованных свойств

let someObj2 = { x:1, };
someObj2.hasOwnProperty('x'); //true
someObj2.hasOwnProperty('toString'); //false

// propertyIsEnumerable() возвращает true только для собственных свойст объекта + перечислимых свойств

let someObj3 = { x:1, };
someObj3.propertyIsEnumerable('x'); // true
someObj3.propertyIsEnumerable('toString'); // false
// Object.prototуре.propertyIsEnumerable('toString'); // false (не перечислимое собственное свойство)

//Сериализация объектов

let objSource = {х:1, у: {z : [false, null, ""]}};
let s = JSON.stringify(objSource);
let parced = JSON.parse(s);

//Методы Object

//toString()

let point1 = {
    x:1, y:2,
    toString: function(){ return `(${this.x}, ${this.y})`; }
};

String(point1); // => "(1, 2)"

//valueOf()

let point2 = {
    x:3, y:4,
    valueOf: function(){ return Math.hypot(this.x,this.y); }
};

Number(point2); // => 5
point2 > 4; // true
point2 > 5; // false

//toJSON()

let point3 = {
    x:1, y:2,
    toString: function(){ return `(${this.x}, ${this.y})`; },
    toJSON: function(){ return this.toString(); },
};

JSON.stringify([point3]); // => '["(1, 2)"]'

// сборка объекта из переменных (ES6)

let firstField = 1;
let secondField = 2;
let createdObject = { firstField, secondField };
console.log(createdObject.firstField+createdObject.secondField); // => 3

// вычислимые свойства (ES6)

const PROP_NAME = "p1";
function computePropName () { return "p" + 2 };
let objWithComputedProps = {
    [PROP_NAME]: 1,
    [computePropName()]: 2,
}

let someSymbol = Symbol('Test symbol');
let testObjWithSymbol = {
    [someSymbol]: 123,
}
console.log(testObjWithSymbol[someSymbol]);

