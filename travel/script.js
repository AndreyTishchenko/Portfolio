if (screen.width > 390) {
    let popupbg = document.querySelector('.popup_bg');
    let buttons = document.querySelectorAll('#pop-up-button');
    let popup_log = document.querySelector('#login-popup')
    let reg_link = document.querySelector('#Register-link');
    let log_link = document.querySelector('#Login-link');
    let popup_reg = document.querySelector('#register-popup');
    for(var i = 0; i< buttons.length; i++){
        buttons[i].addEventListener('click', (event) =>{
            event.preventDefault();
            popupbg.classList.add('active')
            popup_log.classList.add('active')
        })
    }
    reg_link.addEventListener('click', (event) =>{
        event.preventDefault();
        popupbg.classList.add('active')
        popup_log.classList.remove('active')
        popup_reg.classList.add('active')
    })


    log_link.addEventListener('click', (event) =>{
        event.preventDefault();
        popup_reg.classList.remove('active')
        popup_log.classList.add('active')
    })


    
    document.addEventListener('click', (event) =>{
        if(event.target === popupbg){
            popupbg.classList.remove('active')
            popup_log.classList.remove('active')
            popup_reg.classList.remove('active')
        }
    }) 


    var doc = document,
    index = 2;
    let point_right = document.querySelector('#orange-point-right');
    let point_center = document.querySelector('#orange-point-center');
    let point_left = document.querySelector('#orange-point-left');

    var Slider = function () {
    this.box = doc.querySelector('#carousel-container');
    this.slidesBox = doc.querySelector('#carousel-slides');
    this.slides = doc.querySelectorAll('.slide');
    this.btns = doc.querySelectorAll('.btn');
    this.size = this.box.clientWidth;

    this.position();
    this.carousel();
};

Slider.prototype.position = function () {
    var size = this.size;
    this.slidesBox.style.transform = 'translateX(' + (-index * 500) + 'px)'
};

Slider.prototype.carousel = function () {
    var i, max = this.btns.length,
        that = this;
    for(i = 0; i<max; i++){
        that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that))
    }
}

Slider.prev = function (box){
    box.slidesBox.style.transition = "transform .3s ease-in-out";
    var size = box.size;
    index <= 0 ? false : index--;
    box.slidesBox.style.transform = 'translateX(' + (-index * 500) + 'px)'
    box.jump();
}

Slider.next = function (box){
    box.slidesBox.style.transition = "transform .3s ease-in-out";
    var max = box.slides.length;
    var size = box.size;
    index >= max-1 ? false : index++;
    box.slidesBox.style.transform = 'translateX(' + (-index * 500) + 'px)';
    box.jump();
};



Slider.vector_btn_prev = function (box){
    box.slidesBox.style.transition = "transform .3s ease-in-out";
    var size = box.size;
    index <= 0 ? false : index--;
    box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)'
    box.jump();
}

Slider.vector_btn_next = function (box){
    box.slidesBox.style.transition = "transform .3s ease-in-out";
    var max = box.slides.length;
    var size = box.size;
    index >= max-1 ? false : index++;
    box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)'
    box.jump();
};


Slider.prototype.jump = function(){
    var that = this;
    var size = this.size;
    that.slidesBox.addEventListener('transitionend', function() {
        that.slides[index].id == 'firstClone'? index = 1 : index;
        that.slides[index].id == 'lastClone'? index = that.slides.length - 2 : index;
        that.slidesBox.style.transition = 'none';
        that.slidesBox.style.transform = 'translateX(' + (-index * 500) + 'px)';
    });
    that.slidesBox.addEventListener('transitionend', Slider.check);
}

Slider.check = function(){
    if(index == 4|| index == 1){
        point_right.style.cssText = 'background: rgba(242, 120, 92, 1);';
        point_center.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
        point_left.style.cssText = 'background: rgba(242, 120, 92, 0.5);';

    }else if(index == 2){
        console.log(index)
        point_right.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
        point_center.style.cssText = 'background: rgba(242, 120, 92, 1);';
        point_left.style.cssText = 'background: rgba(242, 120, 92, 0.5);';

    }else if(index == 3){
        point_right.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
        point_center.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
        point_left.style.cssText = 'background: rgba(242, 120, 92, 1);';

    }
}

new Slider();

}else{

    var doc = document,
    index = 1;
    let point_right = document.querySelector('#orange-point-right');
    let point_center = document.querySelector('#orange-point-center');
    let point_left = document.querySelector('#orange-point-left');
    var Slider = function () {
    this.box = doc.querySelector('#carousel-container');
    this.slidesBox = doc.querySelector('#carousel-slides');
    this.slides = doc.querySelectorAll('.slide');
    this.btns = doc.querySelectorAll('.btn');
    this.size = this.box.clientWidth;

    this.position();
    this.carousel();
};

Slider.prototype.position = function () {
    var size = this.size;
    this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)'
};

Slider.prototype.carousel = function () {
    var i, max = this.btns.length,
        that = this;
    for(i = 0; i<max; i++){
        that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
    }
}

Slider.prev = function (box){
    box.slidesBox.style.transition = "transform .3s ease-in-out";
    var size = box.size;
    index <= 0 ? false : index--;
    box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)'
    box.jump();
}

Slider.next = function (box){
    box.slidesBox.style.transition = "transform .3s ease-in-out";
    var max = box.slides.length;
    var size = box.size;
    index >= max-1 ? false : index++;
    box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)'
    box.jump();
};

Slider.vector_btn_prev = function (box){
    box.slidesBox.style.transition = "transform .3s ease-in-out";
    var size = box.size;
    index <= 0 ? false : index--;
    box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)'
    box.jump();
}

Slider.vector_btn_next = function (box){
    box.slidesBox.style.transition = "transform .3s ease-in-out";
    var max = box.slides.length;
    var size = box.size;
    index >= max-1 ? false : index++;
    box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)'
    box.jump();
};

Slider.prototype.jump = function(){
    var that = this;
    var size = this.size;
    that.slidesBox.addEventListener('transitionend', function() {
        that.slides[index].id == 'firstClone'? index = 1 : index;
        that.slides[index].id == 'lastClone'? index = that.slides.length - 2 : index;
        that.slidesBox.style.transition = 'none'
        that.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)'
    });
    that.slidesBox.addEventListener('transitionend', Slider.check);

    Slider.check = function(){
        if(index == 4|| index == 1){
            point_right.style.cssText = 'background: rgba(242, 120, 92, 1);';
            point_center.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
            point_left.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
        }else if(index == 2){
            console.log(index)
            point_right.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
            point_center.style.cssText = 'background: rgba(242, 120, 92, 1);';
            point_left.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
    
        }else if(index == 3){
            point_right.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
            point_center.style.cssText = 'background: rgba(242, 120, 92, 0.5);';
            point_left.style.cssText = 'background: rgba(242, 120, 92, 1);';
        }
    
    }
}

new Slider();


let popupbg = document.querySelector('.popup_bg');
let buttons = document.querySelectorAll('#pop-up-button');
let popup_log = document.querySelector('#login-popup')
let reg_link = document.querySelector('#Register-link');
let log_link = document.querySelector('#Login-link');
let popup_reg = document.querySelector('#register-popup');
let signin = document.querySelector('#sign-in');
let inputs = document.querySelectorAll('#inputs');
signin.addEventListener('click', ()=>{
    for (let i = 0; index < inputs.length; i++) {
        alert(inputs[i].value)
    }

})
for(var i = 0; i< buttons.length; i++){
    buttons[i].addEventListener('click', (event) =>{
        event.preventDefault();
        popupbg.classList.add('active')
        popup_log.classList.add('active')
        popup_log.style.cssText = 'display: block;'
    })
}
reg_link.addEventListener('click', (event) =>{
    event.preventDefault();
    popup_reg.style.cssText = 'display: block;'
    popup_log.style.cssText = 'display: none;'
    popup_reg.classList.add('active')
})


log_link.addEventListener('click', (event) =>{
    event.preventDefault();
    popup_reg.classList.remove('active')
    popup_reg.style.cssText = 'display: none;'
    popup_log.style.cssText = 'display: block;'
    popup_log.classList.add('active')
})



document.addEventListener('click', (event) =>{
    if(event.target === popupbg){
        popupbg.classList.remove('active')
        popup_log.classList.remove('active')
        popup_reg.classList.remove('active')
    }
})
}