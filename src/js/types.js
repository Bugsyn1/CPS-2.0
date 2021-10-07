/* const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)');
const desktop = window.matchMedia('(min-width: 1120px)'); */

const typesItem = document.querySelectorAll('.types__item');
const btnHide = document.querySelector('#show-all-types');
import {desktop} from "./brands";
import {tablet} from "./brands";
import {mobile} from "./brands";

const hideTypes = (count)=>{
    for(let i = typesItem.length - 1; i >=count; i--) {
        typesItem[i].classList.add('hidden')
    }
}

if (desktop.matches) {
    hideTypes(4);
} else if (tablet.matches) {
    hideTypes(3);
} else {
    btnHide.classList.add('hidden');
}

let arrTypeHide = document.querySelectorAll('.types__list > .hidden')
const toggleTypes = ()=>{
    for(let i = 0; i < arrTypeHide.length; i++){
        if(arrTypeHide[i].classList.contains('hidden')){
            btnHide.textContent = 'Скрыть';
        }else{
            btnHide.textContent = 'Показать все';
        }
        arrTypeHide[i].classList.toggle('hidden');

    }
    btnHide.classList.toggle('rotate');
}

btnHide.addEventListener('click', toggleTypes);



let swiperTypes = Swiper;
let initTypes = false;


function swiperMod() {
    if (mobile.matches) {
        if (!initTypes) {
            initTypes = true;
            swiperTypes = new Swiper(".mySwiper-types", {
                slidesPerView: "auto",
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination-types",
                    clickable: true,
                },

                autoplay: {
                    delay: 1500,
                    disableOnInteration: true,
                    pauseOnMouseEnter: true,
                },

            });
        }
    } else if (tablet.matches && initTypes) {
        swiperTypes.destroy();
      initTypes = false;
    } else if (desktop.matches && initTypes) {
        swiperTypes.destroy();
        initTypes = false;
    }
}

window.addEventListener('load', function () {
    swiperMod();
});


window.addEventListener('resize', function () {
    swiperMod();

});
