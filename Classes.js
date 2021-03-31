//Классы

//Наследование в стиле до ES6

function Range(){
    //Определение функции-конструктора для класса Range
}

function Span(start, span){
    if(span>=0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

Span.prototype = Object.create(Range.prototype); //Наследование прототипа от Range

Span.prototype.constructor = Span;

// За счет определения собственного метода toString() подкласс Span
// переопределяет метод toString, который иначе он унаследовал бы от Range
Span.prototype.toString = function() {
return `(${this.from}... +${this.to - this.from})`;
};

//Вариант наследования с ES6 (class, extends, super)

class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length-1]; }
}

let a = new EZArray();

class TypedMap extends Map {
    constructor(keyType, valueType, entries) {
        if(entries){
            for (let [k,v] of entries) {
                if (typeof k !== keyType || typeof v !== valueType) {
                    throw new TypeError(`Неправильный тип для записи [${k}, ${v}]`);
                }
            }
        }

        //Вызываем конструктор суперкласса с проверенными значениями
        super(entries);

        this.keyType = keyType;
        this.valueType = valueType;
    }

    //Переопределяем метод суперкласса
    set(key, value) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new TypeError(`${key} не относится к типу ${this.keyType}`);
        }
        if (this.valueType && typeof value !== this.valueType) {
            throw new TypeError(`${value} не относится к типу ${this.valueType}`);
        }
        //Если типы корректны:
        return super.set(key,value);
    }
}