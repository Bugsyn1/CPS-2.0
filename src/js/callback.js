let call = document.querySelectorAll('.modal--btn');
let modalCallback = document.querySelector('.callback--modal') /*Модальное окно*/
let callbackBtnClose = document.querySelector('.callback__button-back');
/* let callBackModal = document.querySelectorAll('.modal-callback') */

for(let i = 0; i < call.length; i++){
    call[i].onclick = function() {
        modalCallback.style.display= 'block';
    }
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
