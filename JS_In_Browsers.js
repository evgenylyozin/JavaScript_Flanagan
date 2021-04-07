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