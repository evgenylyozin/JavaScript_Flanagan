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