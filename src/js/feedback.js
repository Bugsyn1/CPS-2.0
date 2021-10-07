let message = document.querySelectorAll('.modal--message'); /*Наши кнопки*/
let modalFeedback = document.querySelector('.feedback__modal'); /*Полотно*/
let feedbackmodalBtn =document.querySelector('.feedback__button-back')


for(let i = 0; i < message.length; i++){
    message[i].onclick = function() {
        modalFeedback.style.display= 'block';
    }
}

let closeFeedback = function(e){
    if(e.target == modalFeedback){
        modalFeedback.style.display = 'none'
    }
}

modalFeedback.addEventListener('click', closeFeedback)
feedbackmodalBtn.addEventListener('click', ()=>{
  modalFeedback.style.display = 'none'
})

