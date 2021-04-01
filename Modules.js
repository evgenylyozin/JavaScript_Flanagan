//Модули

//Сокрытие элементов в старом стиле (использование немедленно вызываемой
// функции, содержащей скрываемые части и возвращающей нужный класс)

const BitSet = (function() {
    function isValid(){}
    function has(){}
    const BITS = 1;
    return class BitSet extends SomeClass {

    };
}());

//можно вернуть несколько элементов из такого модуля
const stats = (function(){
    const sum = (x,y) => x + y;
    const square = x => x * x;

    function mean(data) {
        return data.reduce(sum)/data.length;
    }

    function stddev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum)/(data.length-1)
        );
    }

    return { mean, stddev };
}());

stats.mean([1,3,5,7,9]);

//Модули в ES6
//Экспортирование в разных местах
export const PI = Math.PI;
export function someFunc(){};
export class Circle {
    //
}
//Или в одном месте:
export { Circle, someFunc, PI };

//Импортирование при экспорте по-умолчанию
import BitSet from './bitset.js';

//Импортирование при экспорте множества значений
import {PI, someFunc, Circle } from './someModule.js';

//Импортирование при экспорте множества значений и значения по-умолчанию
import Default, {PI, someFunc, Circle } from './someModule.js';

//Для импорта части программы, с целью её исполнения, при этом такая часть не имеет экспортов:
//можно запускать модули с полезным поведением и экспортами тем же смособом, если не нужны экспортируемые части
import "./analytics.js";

//Промежуточное (повторное) экспортирование (сборка одного крупного модуля из нескольких небольших)
export * from "./stats/mean.js";
export * from "./stats/stddev.js";
export { mean } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";
export { default as mean } from "./stats/mean.js";
export { default as stddev } from "./stats/stddev.js";

//Использование модуля js в браузере
//можно сделать 1 импорт, а подгруженный модуль загрузит далее все остальные импорты (прописанные в нём)
<script type="module">import "./main. js";</script>

//Динамический импорт (import()) ES2020

import("./stats.js").then(stats=> {
    let average = stats.mean(data);
})

async analyzeData(data) {
    let stats = await import( "./stats.js" );
    return {
    average: stats.mean(data),
    stddev: stats.stddev(data)
    };
}