let btnClick = document.querySelector('.button-mod--click'); /*Кнопка*/ 
let modal = document.querySelector('.modal') /*Туман войны*/ 
let menu = document.querySelector('.menu') /*Меню*/ 
let btnClose = document.querySelector('.menu-header__button--hide');

btnClick.onclick = function() {
    modal.style.display = 'block'
   
}
btnClose.onclick = function() {
    modal.style.display = 'none'
}


window.onclick = function(e){
    if(e.target == modal){
modal.style.display = 'none'
    }
}
