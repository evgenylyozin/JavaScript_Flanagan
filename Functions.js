//FUNCTIONS
//Функция для оценки времени выполнения других функций
function timed(f){
    return function(...args){
        console.log(`Вход в функцию ${f.name}`);
        let startTime = Date.now();
        try {
            return f(...args);
        }
        finally {
            console.log(`Выход из функции ${f.name} \
            спустя ${Date.now()-startTime}мс`);
        }
    }
}

function benchmark(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += 1;
    return sum;
}

timed(benchmark)(1000000);

//Определение собственных свойств функции
uniqueInteger.counter = 0;
function uniqueInteger() {
    return uniqueInteger.counter++;
}
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());

//Немедленно вызываемая функция и функция пространства имён
(function(){

}());
function chunkNamespace(){
    //Функции
    //Переменные
    //Любые определяемые тут переменные - локальны, не конфликтуют с глобальным
    //пространство имен.
}

//Замыкания

let scope = "Глобальная область видимости";
function checkscope() {
    let scope = "Локальная область видимости";
    function f(){
        return scope;
    }
    return f;
}
console.log(checkscope()());

let uniqueInteger2 = (function(){
    let counter = 0;
    return function() {return counter++;};
}()
);

console.log(uniqueInteger2());
console.log(uniqueInteger2());

function counter() {
    let n = 0;
    return {
        count: function() { return n++; },
        reset: function() { n = 0; }
    };
}

let c = counter(), d = counter();
c.count(); // => 0
d.count(); // => 0
c.reset();
c.count(); // => 0
d.count(); // => 1

//Call, Apply, Bind

function trace(o, m) {
    let original = o[m];
    o[m] = function(...args) {
        console.log(new Date(), "Entering:", m);

        let result = original.apply(this, args);

        console.log(new Date(), "Exiting:", m);

        return result;
    };
}

function f(y) {return this.x + y; }
let obj = { x: 1, };
let g = f.bind(obj);
console.log(g(2)); // => 3
let obj2 = {x: 10, g};
console.log(obj2.g(2)); // Тоже 3, т.к. g привязана к объекту obj

// Частичное применения (каррирование)

let sum = (x,y) => x + y;
let succ = sum.bind(null,1) // Первый аргумент указывает на объект привязки,
                            // второй привязывает значение первого аргумента к 1
console.log(succ(2)); // => 3
console.log(succ.name); // => "bound sum"

//Функции высшего порядка

function not(f) {
    return function(...args){
        let result = f.apply(this,args);
        return !result;
    }
}

const even = x => x%2 === 0;

const odd = not(even);

console.log([1,1,3,5,5].every(odd)); // => true

// Мемоизация

function memoize(f){
    const cache = new Map();

    return function(...args){
        let key = args.length+args.join("+");
        if (cache.has(key)){
            return cache.get(key);
        } else {
            let result = f.apply(this, args);
            cache.set(key, result);
            return result; 
        }
    }
}