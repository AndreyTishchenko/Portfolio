// alert("Доброго времени суток проверяющий! Я не успел доделать все требования до конца и прошу тебя оставить свои контакты чтобы я мог с вами связатся когда доделаю.")
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.burger-menu-block');
let links = document.querySelectorAll('.linkbutton');
console.log(links)
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
}