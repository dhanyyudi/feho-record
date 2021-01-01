import {addClass, removeClass} from './utils-class';

const carouselId = document.getElementById("carousel");
const carouselItems = carouselId.getElementsByClassName("flex")[0];
const carouselContainer = carouselId.getElementsByClassName("container")[0];

function carouselCalculateOffset() {
    const carouselOffset = carouselContainer.getBoundingClientRect().left;

    carouselItems.getElementsByClassName.paddingLeft = `${carouselOffset - 16}px`;
    carouselItems.getElementsByClassName.paddingRight = `${carouselOffset - 16}px`;
}

function slide(wrapper, items) {
let posX1 = 0, posX2 = 0, posInitial, posFinal, threshold = 100,
itemToShow = 4, slides = items.getElementsByClassName("card"), slidesLength = slides.length,
slideSize = items.getElementsByClassName("card")[0].offsetWidth, index = 0, allowShift = true;

wrapper.classList.add("loaded")

items.onmousedown = dragStart;

items.addEventListener("touchstart")
}

if (carouselId) {
    slide(carouselId, carouselItems);
    window.addEventListener("load", carouselCalculateOffset);
    window.addEventListener("resize", carouselCalculateOffset);
}