
let btnReadMore = document.querySelector('.desc__button');
let hide = document.querySelector('.desc__text');
let hidespan = document.querySelector('.desc-span ');

btnReadMore.onclick = function () {
        if (hide.classList.contains('desc__text--hide')) {
                btnReadMore.textContent = 'Закрыть';
            } else {
                btnReadMore.textContent = 'Читать далее';
            }
            hide.classList.toggle('desc__text--hide');
            hidespan.classList.toggle('desc-span--hidden');
        }




    