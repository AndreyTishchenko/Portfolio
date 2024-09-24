// alert("Доброго времени суток проверяющий! Я не успел доделать все требования до конца и прошу тебя оставить свои контакты чтобы я мог с вами связатся когда доделаю.")
const images = document.querySelectorAll(".slider .slider-line .slide");
const slider_line = document.querySelector(".slider-line");
const slider = document.querySelector(".slider");
const dots = document.querySelectorAll(".slide-controller button");
const elems = document.querySelectorAll('.progress');
let width_button = 0;
console.log(dots)
let count = 0;
let width;
slider_line.addEventListener('transitionend', change_indicate)
for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener("animationend", next_page)
}

function init() {
    console.log("realize")
    width = document.querySelector(".slider").offsetWidth;
    for (let i = 0; i < images.length; i++) {
        images[i].style.width = width + "px";
        console.log(images[i].style.width);
        console.log(images[i].style.width);
    };
    roll_slider();
    change_indicate()
}

window.addEventListener("resize", init);
init();

function next_page() {
    count++;
    if(count >= images.length){
        count = 0;
    }
    roll_slider();
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('active')
    }
}

function change_indicate() {
    for (let i = 0; i < dots.length; i++) {
        elems[i].classList.remove("active")
    }
    elems[count].classList.add("active");
}

function previous_page() {
    count--;
    if(count < 0){
        count = 2;
    }
    roll_slider();
    for (let i = 0; i < elems.length; i++) {
        elems[i].classList.remove('active')
    }
}

function roll_slider(){
    slider_line.style.transform = "translate(-" + count*width + "px)";
}