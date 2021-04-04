//ИТЕРАТОРЫ И ГЕНЕРАТОРЫ

let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value);
}

let list = [1,2,3,4,5];
let iter = list[Symbol.iterator]();
let head = iter.next().value; // head == 1
let tail = [...iter]; // tail = [2,3,4,5]

// Итерируемый числовой класс Range

class Range {
    constructor (from,to){
        this.from = from;
        this.to = to;
    }

    has(x) {return typeof x === "number" && this.from <= x && x <= this.to;}

    toString() { return `{ х | ${this.from} <= х <= ${this.to} }`; }

    [Symbol.iterator](){
        let next = Math.ceil(this.from);
        let last = this.to;
        return {
            next() {
                return (next<=last) ? {value: next++} : {done: true};
            },
            [Symbol.iterator]() { return this; }
        };
    }
}

for (let x of new Range(1,10)) console.log(x);

//Функция, возвращающая итерируемое значение

function map(iterable, f){
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {return this;},
        next(){
            let v = iterator.next();
            if(v.done){
                return v;
            } else {
                return {value:f(v.value)};
            }
        }
    };
}

console.log([...map(new Range(1,4), x=>x*x)]);

function filter(iterable,predicate){
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {return this;},
        next() {
            for(;;){
                let v = iterator.next();
                if(v.done || predicate(v.value)){
                    return v;
                }
            }
        }
    }
}

console.log([...filter(new Range(1,10), x=> x%2 === 0)]);

//Генераторы
function* oneDigitPrimes(){
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

let primes = oneDigitPrimes();
console.log(primes.next().value); // => 2
console.log(primes.next().value); // => 3
console.log(primes.next().value); // => 5
console.log(primes.next().value); // => 7
console.log(primes.next().done); // => true

const seq = function*(from,to){
    for(let i = from; i<=to; i++) yield i;
}
console.log([...seq(3,5)]); // => [3,4,5]

//Выдача каждого значения из списка итерируемых объектов (yield*)
function* sequence(...iterables) {
    for(let iterable of iterables){
        yield* iterable;
    }
}
console.log([...sequence("abc",oneDigitPrimes())]);