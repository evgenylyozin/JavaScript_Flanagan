//Среда Node

const fs = require("fs");

function readConfigFile(path, callback){
    fs.readFile(path, "utf8", (err,text)=>{
        if(err){
            console.log(err);
            callback(null);
            return;
        }
        let data = null;
        try{
            data = JSON.parse(text);
        } catch(e){
            console.log(e);
        }
        callback(data);
    });
}

//Буферы

let b = Buffer.from([0x41, 0x42, 0x43]);
b.toString();
b.toString("hex");

let computer = Buffer.from("IBM3111", "sacii");

//Пустые буферы

let zeros = Buffer.alloc(1024); // 1024 нуля
let ones = Buffer.alloc(128,1); // 128 единиц

//EventEmitter

const net = require("net");
let server = new net.Server(); // server наследует от класса EventEmitter, выпускает определенные события при подключении к нему и отключении от него
server.on("connection", socket=>{
    socket.end("Hello World!", "utf8");
})

//Потоки

function pipeFileToSocket(filename,socket){
    fs.createReadStream(filename).pipe(socket); // Соединить поток Readable и Writeable
}

//сжатие

const zlib = require("zlib");

function gzip(filename, callback){
    let source = fs.createReadStream(filename);
    let destination = fs.createWriteStream(filename+".gz");
    let gzipper = zlib.createGzip();

    source
    .on("error",callback)
    .pipe(gzipper)
    .pipe(destination)
    .on("error",callback)
    .on("finish",callback);
}

// Process - глобальный объект

process.argv; //Массив аргументов командной строки
process.arch; //Архитектура ЦП
process.cwd(); // Возвращает текущий рабочий каталог
process.chdir(); // Устанавливает текущий рабочий каталог
process.cpuUsage();// Сообщает коэффициент нагрузки ЦП
process.env; // Объект с переменными среды
process.execPath // Абсолютный путь к исполняемому файлу Node
process.exit(); // Прекращение выполнения программы
process.exitCode; // Целочисленный код, который будет сообщен при завершении программы
process.getuid(); // Возвращает идентификатор пользователя Unix для текущего пользователя
process.memoryUsage(); // Возвращает объект со сведениями об использовании памяти
process.pid // Идентификатор текущего процесса
process.ppid; //Идентификатор родительского процесса
process.platform; // Операционная система
process.resourceUsage();//Возвращает объект со сведениями об использовании ресурсов
process.setuid(); // Устанавливает текущего пользователя по ID или по имени
process.uptime(); //Возвращает время безотказной работы Node в секундах
process.version; // Строка с версией Node
process.versions; // Строки с версиями билиотек, от которых зависит Node

//Модуль os предоставляет доступ к похожим низкоуровневым данным
const os = require("os");
//Работа с файлами (модули fs и path)

__filename // абсолютный путь к файлу, который хранит текущий код
__dirname // абсолютный путь к каталогу, в котором хранится __filename

os.homedir() // Домашний каталог пользователя

const path = require("path");

path.sep // либо слеш, либо обратный слеш в зависимости от ОС

let p = "src/pkg/test.js";
path.basename(p) //  => test.js
path.extname(p) //  => .js
path.dirname(p) //  => src/pkg

//Чтение из файлов

let buffer = fs.readFileSync("test.data"); // Здесь вернется буфер, его нужно декодировать
let text = fs.readFileSync("data.csv","utf8"); // Здесь вернется строка

//чтение байтов файла асинхронно

fs.readFile("test.data", (err,buffer)=>{
    if(err){
        // do something
    } else {
        //work with buffer
    }
});

//Асинхронное чтение на основе промисов

fs.promises.readFile("data.csv","utf8")
.then(processFileText)
.catch(handleErrors);


//или промисы с await

async function processText(filename,encoding="utf8"){
    let text = await fs.promises.readFile(filename,encoding);
    //обработка текста
}

//Запись в файлы

fs.writeFileSync(path.resolve(__dirname,"settings.json"),JSON.stringify(settings));








