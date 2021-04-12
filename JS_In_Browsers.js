//JS in Browsers

//Регистрация обработчиков событий

window.onload = function(){
    //some function
}

let b = document.querySelector("#myButton");
b.onclick = function(){/* Some handler function */};
b.addEventListener("click",()=>{/*some handler*/});

//Удалить обработчик события
b.removeEventListener("click",()=>{/*some handler*/});

//Создание собственных событий
document.dispatchEvent(new CustomEvent("busy",{detail: true}));
fetch(url)
.then(handleNetworkResponce)
.catch(handleNetworkError)
.finally(()=>{
    document.dispatchEvent(new CustomEvent("busy",{detail: false}));
})

document.addEventListener("busy",(e)=>{
    if(e.detail){
        showSpinner();
    } else {
        hideSpinner();
    }
});

//DOM API

//поиск элементов в документе
let spinner = document.querySelector("#spinner"); //поиск и возврате первого элемента или null
let titles = document.querySelectorAll("h1, h2, h3"); // Возврат объекта NodeList, похожего на массив

//свойства выбранного элемента
spinner.parentNode;// ссылается на родителя элемента
spinner.children;// содержит дочерние элементы в объекте NodeList
spinner.childElementCount;// количество дочерних элементов типа Element
spinner.firstElementChild;// первый дочерний элемент
spinner.lastElementChild;// последний дочерний элемент
spinner.nextElementSibling;// следующий родственный элемент
spinner.previousElementSibling;// предыдущий родственный элемент


//Рекурсивный обход объекта e типа Document или Element
// с вызовом функции для объекта e и каждого его потомка

function traverse(e, f){
    f(e);
    for(let child of e.children){
        traverse(child,f);
    }
}

function traverse2(e, f){
    f(e);
    let child = e.firstElementChild;
    while(child !== null){
        traverse2(child, f);
        child = child.nextElementSibling;
    }
}

// Обход узлов (Объектов Element, Text и Comment)

spinner.parentNode;
spinner.childNodes;
spinner.firstChild;
spinner.lastChild;
spinner.nextSibling;
spinner.previousSibling;
spinner.nodeType; // Узлы Document имеют значение - 9, Element - 1, Text - 3, Comment - 8
spinner.nodeValue; // Текстовое содержимое узла Text или Comment
spinner.nodeName; // Имя HTML-дескриптора объекта Element в верхнем регистре

// Вернуть весь текст внутри элемента или документа
// на практике получить текстовое содержимое элемента можно через
// e.textContent

function textContent(e){
    let s = "";
    for (let child = e.firstChild; child !== null; child = child.nextSibling){
        let type = child.nodeType;
        if(type === 3){
            s+=child.nodeValue;
        } else if(type === 1){
            s+=textContent(child);
        }
    }
    return s;
}

//Добавление элемента в 

let paragraph = document.createElement("p");
let emphasis = document.createElement("em");

emphasis.append("World");//Добавить текст в элемент em
paragraph.append("Hello ", emphasis, "!");
paragraph.prepend("Hi! ");
paragraph.innerHTML; // => "Hi! Hello <em>World</em>!"

//Работа с CSS
document.querySelector("#tooltip").classList.remove("hidden");
document.querySelector("#tooltip").classList.add("hidden");

//Установить тултип в определенном месте

function displayAt(tooltip, x, y){
    tooltip.style.display = "block";
    tooltip.style.position = "absolute";
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

// Получение вычисляемого стиля элемента (все встроенные стили + стили таблиц и иные, которые браузер применил к элементу)

let title = document.querySelector("section1title");
let styles = window.getComputedStyle(title);
let beforeStyles = window.getComputedStyle(title,"::before");

// Геометрия и прокрутка документов

title.getBoundingClientRect(); //Возвращает объект со свойствами left,right,top,bottom,width,height элемента
title.getClientRects(); // Вернет массив объектов, похожих на объект, возвращаемый getBoundingClientRect(). Используется для встроенных элементов по типу em, span.

//Используя координаты ОКНА ПРОСМОТРА можно вызвать метод document.elementFromPoint() для
// получения элемента по заданным координатам
// Вернёт самый внутренний (наиболее глубоко вложенный) и самый верхний по z-index элемент в данной точке

//Прокрутка

let documentHeight = document.documentElement.offsetHeight;
let viewportHeight = window.innerHeight;
//прокрутить до последней страницы документа
window.scrollTo(0,documentHeight-viewportHeight);

//прокрутка на определенное расстояние
setInterval(()=>{scrollBy(0,50)},500);

//Метод scrollIntoView() гарантирует, что элемент, на котором он вызван,
//будет виден в окне просмотра

//Размеры окон и прокрутки

window.innerHeight; // Выдает высоту окна просмотра
window.innerWidth; // Выдает ширину окна просмотра

getBoundingClientRect(document.documentElement); // Вернет ширину и высоту всего документа
document.documentElement.offsetHeight; // Вернет высоту всего документа
document.documentElement.offsetWidth; // Вернет ширину всего документа

window.scrollX; //Вернет смещение прокрутки документа по x
window.scrollY; //Вернет смещение прокрутки документа по y

//ДЛЯ ЭЛЕМЕНТОВ

e.offsetWidth; //Возвращает экранный размер элемента в пикселях CSS, включает границу, отступы, но не поля
e.offsetHeight; //Возвращает экранный размер элемента в пикселях CSS, включает границу, отступы, но не поля

e.offsetLeft;
e.ofsetTop; //Возвращают координаты X и Y элемента, для большинства относительно документа, для потомков позиционированных элементов - относительно предка
e.offsetParent; //Указывает, относительно какого элемента заданы свойства

e.clientWidth; // то же, что offset, но без учета границ
e.clientHeight;

e.scrollWidth; //Возвращает размер области содержимого элемента + отступы + размер выходящего за пределы содержимого
e.scrollHeight;

//ВЕБ-КОМПОНЕНТЫ

//подключение
<script type="module" src="components/search-box.js"></script>

//применение
<search-box placeholder="Search..."></search-box>

//Компонент может поддерживать слоты
<search-box>
    <img src="src" slot="left"/>
    <img src="src2" slot="right"/>
</search-box>

//специальные элементы

customElements.define();//Определяет класс для кастомного дескриптора

<p>
    The document has ome marble: <inline-circle></inline-circle>.
    The HTML parser instantiates two more marbles:
    <inline-circle diameter="1.2em" color="blue"></inline-circle>
    <inline-circle diameter=".6em" color="gold"></inline-circle>.
    How many marbles does the document contain now?
</p>

//Реализация специального элемента <inline-circle>

customElements.define("inline-circle", class InlineCircle extends HTMLElement{
    //Когда элемент вставляется в документ
    connectedCallback(){
        this.style.display = "inline-block";
        this.style.borderRadius = "50%";
        this.style.border = "solid black 1px";
        this.style.transform = "translateY(10%)";

        if(!this.style.width){
            this.style.width = "0.8em";
            this.style.height = "0.8em";
        }
    }
    // ObservedAttributes() указывает об изменении каких свойств мы хотим получать уведомления
    static get observedAttributes(){return ["diameter","color"];}

    //при изменении одного из отслеживаемых атрибутов вызывается этот колбэк:
    attributeChangedCallback(name, oldValue, newValue){
        switch(name){
            case "diameter":
                this.style.width = newValue;
                this.style.height = newValue;
                break;
            case "color":
                this.style.backgroundColor = newValue;
                break;
        }
    }
    //установка и получение атрибутов компонента
    get diameter() {return this.getAttribute("diameter");}
    set diameter(diameter) {this.setAttribute("diameter",diameter);}

    get color() {return this.getAttribute("color");}
    set color(color) {this.setAttribute("color",color);}
})

//Теневая модель DOM, превращение специального элемента в подлинный веб-компонент

e.attachShadow({mode:"open"}); // Возвращает объект корневого элемента теневого дерева, а так же
//устанавливает этот объект в качестве значения свойства shadowRoot ведущего элемента


//Пример веб-компонента

class SearchBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(SearchBox.template.content.cloneNode(true));
        
        this.input = this.shadowRoot.querySelector("#input");
        let leftSlot = this.shadowRoot.querySelector('slot[name="left"]');
        let rightSlot = this.shadowRoot.querySelector('slot[name="right"]');
        
        this.input.onfocus = () => { this.setAttribute("focused", ""); };
        this.input.onblur = () => { this.removeAttribute("focused"); };
    
        leftSlot.onclick = this.input.onchange = (event) => {
            event.stopPropagation();
            if (this.disabled) return;
            this.dispatchEvent(new CustomEvent("search", {
                detail: this.input.value
            }));
        };

        rightSlot.onclick = (event) => {
            event.stopPropagation();
            if (this.disabled) return;
            let e = new CustomEvent("clear", {cancelable: true});
            this.dispatchEvent(e);
            if(!e.defaultPrevented){
                this.input.value="";
            }
        };

        this.observedAttributes = ["disabled","placeholder","size","value"];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name === "disabled") {
            this.input.disabled = newValue !== null;
        } else if (name === "placeholder") {
            this.input.placeholder = newValue;
        } else if (name === "size") {
            this.input.size = newValue;
        } else if (name === "value") {
            this.input.value = newValue;
        }
    }

    get placeholder() {return this.getAttribute("placeholder");}
    get disabled() {return this.getAttribute("disabled");}
    get value() {return this.getAttribute("value");}
    get size() {return this.getAttribute("size");}
    get hidden() {return this.getAttribute("hidden");}

    set placeholder(value) {this.setAttribute("placeholder",value);}
    set disabled(value) {
        if(value) this.setAttribute("disabled","");
        else this.removeAttribute("disabled");
    }
    set value(text) {this.setAttribute("value",text);}
    set size(value) {this.setAttribute("size",value);}
    set hidden(value) {
        if(value) this.setAttribute("hidden","");
        else this.removeAttribute("hidden");
    }

    
}

SearchBox.template = document.createElement("template");
SearchBox.template.innerHTML = `
<style>
/*
* Селектор :host ссылается на <search-box> в световой модели DOM
*/
:host {

}
some styles
</style>

<div>
    <slot name="left">\u{1f50d}</slot>
    <input type="text" id="input" />
    <slot name="right">\u{2573}</slot>
</div>
`;

//регистрируем компонент

customElements.define("search-box", SearchBox);


//Местоположение, навигация, хронология

let url = new URL(window.location);
let query = url.searchParams.get("q");
let numResults = parseInt(url.searchParams.get("n")||10);

//Загрузка нового документа

window.location = "https://www.url.com";
document.location = "relative_url.html";

//заменить текущий документ без возможности возврата назад или с возможностью

if(!isBrowserSupported()) location.replace("staticpage.html"); // Замена страницы на статическую, если клиент не поддерживает JS

location.assign("url") // замена текущего документа на новый, но есть возможность вернуться стрелкой назад в браузере

//Хронология просмотра

window.history.back(); // Перейти на 1 документ назад
window.history.forward(); // Перейти на 1 документ вперед
window.history.go(-2); // Перейти на 2 документа назад

location.hash; //установка этого свойства приводит к добавлению записи в историю браузера, это свойство не обязано быть реальным якорем документа, может быть любой строкой
// при помощи этого свойства можно переключаться между состояниями динамически генерируемого документа
// так же при установке location.hash появляется событие hashchange, которое можно прослушивать и отображать соответствующее новому hash состояние документа

//вторая методика управления состоянием

history.pushState(); // + событие popstate

// ВЗАИМОДЕЙСТВИЕ С СЕТЬЮ

//fetch()

fetch("/api/users/current")

    .then(response => {
        if(response.ok && response.headers.get("Content-Type") === "application/json") {
            return response.json();
        } else {
            throw new Error(`Unexpected response status ${response.status} or content type`);
        }
    })

    .then(currentUser => {
        displayUserInfo(currentUser);
    })

    .catch(error => {
        console.log("Error while fetching current user:", error);
    });

//установка параметров запроса

async function search(term){
    let url = new URL("/api/search");
    url.searchParams.set("q",term);
    let response = await fetch(url);
    if(!response.ok) throw new Error(response.statusText);
    let resultsArray = await response.json();
    return resultsArray;
}

//Установка заголовков запроса

let authHeaders = new Headers();
authHeaders.set("Authorization", `Basic ${btoa(`${username}:${password}`)}`);

fetch("url",{headers: authHeaders})
.then(response => response.json())
.then(usersList => displayUsers(usersList));

let request = new Request(url, {headers:headers});
fetch(request).then(response=>response);

//Установка метода запроса

fetch("url",{
    method:"POST",
    body:"Hello WOrld!",
});

fetch("url", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: new Headers({"Content-Type":"application/json"}),
})

//Прерывание выполнения запроса (AbortController)

function fetchWithTimeout(url, options={}){
    if(options.timeout){
        let controller = new AbortController();
        options.signal = controller.signal;
        setTimeout(()=>{controller.abort();},options.timeout);
    }
    return fetch(url,options);
}

//СОБЫТИЯ, ПОСЫЛАЕМЫЕ СЕРВЕРОМ

let ticker = new EventSource("stockprices.php");
ticker.addEventListener("bid", (event) => {
    displayNewBid(event.data);
});

//Простой чат клиент с использованием EventSource

<html>
    <head>
        <title>SSE CHAT</title>
    </head>
    <body>
        <input id="input"/>
        <script>
            let nick = prompt("Enter your nickname");
            let input = document.querySelector("#input");
            input.focus();

            let chat = new EventSource("/chat");
            chat.addEventListener("chat", event => {
                let div = document.createElement("div");
                div.append(event.data);
                input.before(div);
                input.scrollIntoView();
            });

            //Отправить сообщение пользователя на сервер
            input.addEventListener("change",()=>{
                fetch("/chat", {
                    method: "POST",
                    body: nick + ": " + input.value,
                })
                .catch(e=>console.error);

                input.value="";
            });
        </script>
    </body>
</html>

// Реализация серверной части чата (в среде Node)

const http = require("http");
const fs = require("fs");
const url = require("url");

const clientHTML = fs.readFileSync("chatClient.html");

let clients = [];

let server = new http.Server();
server.listen(8080);

server.on("request", (request,response)=>{
    let pathname = url.parse(request.url).pathname;

    if(pathname === "/"){
        response.writeHead(200,{"Content-Type": "text/html"}).end(clientHTML)
    }
    else if (pathname !== "/chat" ||
    (request.method !== "GET" && request.method !== "POST")) {
        response.writeHead(404).end();
    }
    else if (request.method === "GET") {
        acceptNewClient(request,response);
    }
    else {
        broadcastNewMessage(request,response);
    }
});

function acceptNewClient(request,response){
    clients.push(response);
    request.connection.on("end",()=>{
        clients.splice(clients.indexOf(response),1);
        response.end();
    });
    response.writeHead(200,{
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
    });
    response.write("event: chat\ndata: Connected\n\n");
}

async function broadcastNewMessage(request,response){
    request.setEncoding("utf8");
    let body = "";
    for await (let chunk of request){
        body+=chunk;
    }
    response.writeHead(200).end();
    let message = "data: " + body.replace("\n", "\ndata: ");
    let event = `event: chat\n${message}\n\n`;

    clients.forEach(client=>client.write(event));
}

//ВЕБ-СОКЕТЫ

