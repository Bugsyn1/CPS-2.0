let swip = Swiper;
let ini = false;
import {mobile} from "./brands";
import {tablet} from "./brands";
import {desktop} from "./brands";

function swiperMo() {
    if (mobile.matches) {
        if (!ini) {
            ini = true;
            swip = new Swiper(".mySwiper-price", {
                slidesPerView: "auto",
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination-price",
                    clickable: true,
                },

                autoplay: {
                    delay: 1500,
                    disableOnInteration: true,
                    pauseOnMouseEnter: true,
                },

            });
        }
    } else if (tablet.matches && ini) {
        swip.destroy();
        ini = false;
    } else if (desktop.matches && ini) {
        swip.destroy();
        ini = false;
    }
}

window.addEventListener('load', function () {
    swiperMo();
});


window.addEventListener('resize', function () {
    swiperMo();

});
