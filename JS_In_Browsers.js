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