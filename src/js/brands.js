export const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
export const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)');
export const desktop = window.matchMedia('(min-width: 1120px)');
let swiper = Swiper;
let init = false;

const brandsItem = document.querySelectorAll('.brands__item');
const btnRM = document.querySelector('#show-all-brands');

const hideBrands = (count) => {
    for (let i = brandsItem.length - 1; i >= count; i--) {
        brandsItem[i].classList.add('hide');
    }
}

if (desktop.matches) {
    hideBrands(8);
} else if (tablet.matches) {
    hideBrands(6);
} else {
    btnRM.classList.add('hide');
}

let arrHide = document.querySelectorAll('.brands__list > .hide'); /*Массив из скрытых эл-в*/
const toggle = () => {
    for (let i = 0; i < arrHide.length; i++) {
        if (arrHide[i].classList.contains('hide')) {
            btnRM.textContent = 'Скрыть';
        } else {
            btnRM.textContent = 'Показать все';
        }
        arrHide[i].classList.toggle('hide');
    }
    btnRM.classList.toggle('rotate');


}
btnRM.addEventListener('click', toggle);





function swiperMode() {
    if (mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper(".mySwiper-brand", {
                slidesPerView: "auto",
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination-brands",
                    clickable: true,
                },

                autoplay: {
                    delay: 1500,
                    disableOnInteration: true,
                    pauseOnMouseEnter: true,
                },

            });
        }
    } else if (tablet.matches && init) {
        swiper.destroy();
        init = false;
    } else if (desktop.matches && init) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('load', function () {
    swiperMode();
});


window.addEventListener('resize', function () {
    swiperMode();

});
