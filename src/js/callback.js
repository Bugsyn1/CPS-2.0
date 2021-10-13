let call = document.querySelectorAll('.modal--btn');
let modalCallback = document.querySelector('.callback--modal') /*Модальное окно*/
let callbackBtnClose = document.querySelector('.callback__button-back');
/* let callBackModal = document.querySelectorAll('.modal-callback') */
let body = document.querySelector('.hidden__body');

for(let i = 0; i < call.length; i++){
    call[i].addEventListener('click', ()=> {
        modalCallback.style.display= 'block';
        body.style.overflow = 'hidden';
    })
}

let close = function(e){
    if(e.target == modalCallback){
        modalCallback.style.display='none'
    }
}

modalCallback.addEventListener('click', close)
callbackBtnClose.addEventListener('click', ()=>{
  modalCallback.style.display='none'
})
