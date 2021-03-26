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

let obj = {};
obj.x = 1;
let p = Object.create(obj);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
console.log(f);
console.log(q.x+q.y);

