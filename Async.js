//Промисы, асинхронное программирование

//гипотетический код разбора ответа сервера
fetch("some_url")
.then(responce => {
    if(!responce.ok){
        return null;
    }
    let type = responce.headers.get("content-type");
    if(type!=="application/json"){
        throw new TypeError(`Expected JSON, got ${type}`);
    }
    return responce.json();
})
.then(profile => {
    if(profile){
        displayUserProfile(profile);
    } else {
        displayLoggedOutUserPage();
    }
})
.catch(e=> {
    if(e instanceof NetworkError){
        displayErrorMessage("Check your internet connection.");
    } else if (e instanceof TypeError){
        displayErrorMessage("Something is wrong with our server!");
    } else {
        console.log(e);
    }
});

//Promise.all() => параллельное выполнение нескольких асинхронных операций

const urls = ['urls','go','here'];
promises = urls.map(url=>fetch(url).then(r=>r.text()));
Promise.all(promises)
.then(bodies => {/*делаем что-то с массивом строк*/})
.catch(e=>console.log(e));

//Основанная на Promise функция

function wait(duration){
    return new Promise((resolve,reject)=> {
        if (duration < 0){
            reject(new Error("Time travel not yet implemented"));
        }
        setTimeout(resolve,duration);
    });
}

//Async и Await



async function getHighScore(){
    let responce = await fetch("some_url");
    let profile = await responce.json();
    return profile.highscorel;
}

//работа с множеством промисов через await

let [value1,value2] = await Promise.all([getJSON(url1),getJSON(url2)]);

//Асинхронные итераторы

const fs = require("fs");
async function parseFile(filename){
    let stream = fs.createReadStream(filename,{encoding:"utf-8"});
    for await (let chunk of stream){
        parseChunk(chunk);
    }
}

//Асинхронные генераторы
function elapsedTime(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function* clock(interval, max=Infinity){
    for(let count = 1; count <= max; count++){
        await elapsedTime(interval);
        yield count;
    }
}

async function test(){
    for await (let tick of clock(300,100)){
        console.log(tick);
    }
}
