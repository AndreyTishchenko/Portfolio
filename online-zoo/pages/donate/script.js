const iconMenu = document.querySelector('.menu_icon'); 
const tittlePage =document.querySelector('.lg-text');
const logoActive = document.querySelector('.header_logo-text');
const closeBTN = document.querySelector('.close');


//                   МЕНЮ БУРГЕР
if (iconMenu) {
  const menuBody = document.querySelector('.nav-menu');

  iconMenu.addEventListener('click', function(e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      tittlePage.classList.toggle('_active');
      logoActive.classList.toggle('_active');
      closeBTN.classList.toggle('_active');
  });
  closeBTN.addEventListener('click', function(e) {

    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    tittlePage.classList.remove('_active');
    logoActive.classList.remove('_active');
    closeBTN.classList.remove('_active');
    
});
  
}

//donate
const input = document.querySelector('.donate_text-input')

const activeInpute5000 = document.querySelector('.item-5000')
const activeInpute2000 = document.querySelector('.item-2000 ')
const activeInpute1000 = document.querySelector('.item-1000')
const activeInpute500 = document.querySelector('.item-500')
const activeInpute250 = document.querySelector('.item-250')
const activeInpute100 = document.querySelector('.item-100')
const activeInpute50 = document.querySelector('.item-50')
const activeInpute25 = document.querySelector('.item-25')

const activeText5000 = document.querySelector('.text-5000')
const activeText2000 = document.querySelector('.text-2000 ')
const activeText1000 = document.querySelector('.text-1000')
const activeText500 = document.querySelector('.text-500')
const activeText250 = document.querySelector('.text-250')
const activeText100 = document.querySelector('.text-100')
const activeText50 = document.querySelector('.text-50')
const activeText25 = document.querySelector('.text-25')

const  textActive = document.querySelector('.donate-number')
const textPandas = document.querySelector('.number-desc')


function updatenum(e) {
  if(input.value.length > 4) {
    console.log(input.value.substr(0,3));
     let newIpute = input.value.substr(0,4)
     document.getElementById("valueNum").value = newIpute;
  }
}
input.addEventListener('input', updatenum);

const activeit5000 = () => {
  textPandas.textContent = 'Panda diet for the days.'
  function myFunction() {
    document.getElementById("valueNum").value = "5000";
  }
  myFunction()
  textActive.textContent = '200';
  activeInpute5000.classList.add('active-item');
  activeText5000.classList.add('active_label-text-span');

  activeInpute2000.classList.remove('active-item');
  activeText2000.classList.remove('active_label-text-span');

  activeInpute1000.classList.remove('active-item');
  activeText1000.classList.remove('active_label-text-span');

  activeInpute500.classList.remove('active-item');
  activeText500.classList.remove('active_label-text-span');

  activeInpute250.classList.remove('active-item');
  activeText250.classList.remove('active_label-text-span');

  activeInpute100.classList.remove('active-item');
  activeText100.classList.remove('active_label-text-span');

  activeInpute50.classList.remove('active-item');
  activeText50.classList.remove('active_label-text-span');

  activeInpute25.classList.remove('active-item');
  activeText25.classList.remove('active_label-text-span');


}
activeInpute5000.addEventListener("click", activeit5000);


const activeit2000 = () => {
  textPandas.textContent = 'Panda diet for the days.'
  function myFunction() {
    document.getElementById("valueNum").value = "2000";
  }
  myFunction()

  textActive.textContent = '80';
  activeInpute5000.classList.remove('active-item');
  activeText5000.classList.remove('active_label-text-span');

  activeInpute2000.classList.add('active-item');
  activeText2000.classList.add('active_label-text-span');

  activeInpute1000.classList.remove('active-item');
  activeText1000.classList.remove('active_label-text-span');

  activeInpute500.classList.remove('active-item');
  activeText500.classList.remove('active_label-text-span');

  activeInpute250.classList.remove('active-item');
  activeText250.classList.remove('active_label-text-span');

  activeInpute100.classList.remove('active-item');
  activeText100.classList.remove('active_label-text-span');

  activeInpute50.classList.remove('active-item');
  activeText50.classList.remove('active_label-text-span');

  activeInpute25.classList.remove('active-item');
  activeText25.classList.remove('active_label-text-span');


}
activeInpute2000.addEventListener("click", activeit2000);

const activeit1000 = () => {
  textPandas.textContent = 'Panda diet for the days.'
  function myFunction() {
    document.getElementById("valueNum").value = "1000";
  }
  myFunction()

  textActive.textContent = '40';
  activeInpute5000.classList.remove('active-item');
  activeText5000.classList.remove('active_label-text-span');

  activeInpute2000.classList.remove('active-item');
  activeText2000.classList.remove('active_label-text-span');

  activeInpute1000.classList.add('active-item');
  activeText1000.classList.add('active_label-text-span');

  activeInpute500.classList.remove('active-item');
  activeText500.classList.remove('active_label-text-span');

  activeInpute250.classList.remove('active-item');
  activeText250.classList.remove('active_label-text-span');

  activeInpute100.classList.remove('active-item');
  activeText100.classList.remove('active_label-text-span');

  activeInpute50.classList.remove('active-item');
  activeText50.classList.remove('active_label-text-span');

  activeInpute25.classList.remove('active-item');
  activeText25.classList.remove('active_label-text-span');


}
activeInpute1000.addEventListener("click", activeit1000);

const activeit500 = () => {
  textPandas.textContent = 'Panda diet for the days.'
  function myFunction() {
    document.getElementById("valueNum").value = "500";
  }
  myFunction()

  textActive.textContent = '20';
  activeInpute5000.classList.remove('active-item');
  activeText5000.classList.remove('active_label-text-span');

  activeInpute2000.classList.remove('active-item');
  activeText2000.classList.remove('active_label-text-span');

  activeInpute1000.classList.remove('active-item');
  activeText1000.classList.remove('active_label-text-span');

  activeInpute500.classList.add('active-item');
  activeText500.classList.add('active_label-text-span');

  activeInpute250.classList.remove('active-item');
  activeText250.classList.remove('active_label-text-span');

  activeInpute100.classList.remove('active-item');
  activeText100.classList.remove('active_label-text-span');

  activeInpute50.classList.remove('active-item');
  activeText50.classList.remove('active_label-text-span');

  activeInpute25.classList.remove('active-item');
  activeText25.classList.remove('active_label-text-span');


}
activeInpute500.addEventListener("click", activeit500);

const activeit250 = () => {
  function myFunction() {
    document.getElementById("valueNum").value = "250";
  }
  myFunction()

  textActive.textContent = '10';
  activeInpute5000.classList.remove('active-item');
  activeText5000.classList.remove('active_label-text-span');

  activeInpute2000.classList.remove('active-item');
  activeText2000.classList.remove('active_label-text-span');

  activeInpute1000.classList.remove('active-item');
  activeText1000.classList.remove('active_label-text-span');

  activeInpute500.classList.remove('active-item');
  activeText500.classList.remove('active_label-text-span');

  activeInpute250.classList.add('active-item');
  activeText250.classList.add('active_label-text-span');

  activeInpute100.classList.remove('active-item');
  activeText100.classList.remove('active_label-text-span');

  activeInpute50.classList.remove('active-item');
  activeText50.classList.remove('active_label-text-span');

  activeInpute25.classList.remove('active-item');
  activeText25.classList.remove('active_label-text-span');


}
activeInpute250.addEventListener("click", activeit250);

const activeit100 = () => {
  textPandas.textContent = 'Panda diet for the days.'
  function myFunction() {
    document.getElementById("valueNum").value = "100";
  }
  myFunction()

  textActive.textContent = '4';
  activeInpute5000.classList.remove('active-item');
  activeText5000.classList.remove('active_label-text-span');

  activeInpute2000.classList.remove('active-item');
  activeText2000.classList.remove('active_label-text-span');

  activeInpute1000.classList.remove('active-item');
  activeText1000.classList.remove('active_label-text-span');

  activeInpute500.classList.remove('active-item');
  activeText500.classList.remove('active_label-text-span');

  activeInpute250.classList.remove('active-item');
  activeText250.classList.remove('active_label-text-span');

  activeInpute100.classList.add('active-item');
  activeText100.classList.add('active_label-text-span');

  activeInpute50.classList.remove('active-item');
  activeText50.classList.remove('active_label-text-span');

  activeInpute25.classList.remove('active-item');
  activeText25.classList.remove('active_label-text-span');


}
activeInpute100.addEventListener("click", activeit100);


const activeit50 = () => {
  textPandas.textContent = 'Panda diet for the days.'
  function myFunction() {
    document.getElementById("valueNum").value = "50";
  }
  myFunction()
  textActive.textContent = '2';
  activeInpute5000.classList.remove('active-item');
  activeText5000.classList.remove('active_label-text-span');

  activeInpute2000.classList.remove('active-item');
  activeText2000.classList.remove('active_label-text-span');

  activeInpute1000.classList.remove('active-item');
  activeText1000.classList.remove('active_label-text-span');

  activeInpute500.classList.remove('active-item');
  activeText500.classList.remove('active_label-text-span');

  activeInpute250.classList.remove('active-item');
  activeText250.classList.remove('active_label-text-span');

  activeInpute100.classList.remove('active-item');
  activeText100.classList.remove('active_label-text-span');

  activeInpute50.classList.add('active-item');
  activeText50.classList.add('active_label-text-span');

  activeInpute25.classList.remove('active-item');
  activeText25.classList.remove('active_label-text-span');


}
activeInpute50.addEventListener("click", activeit50);

const activeit25 = () => {
  function myFunction() {
    document.getElementById("valueNum").value = "25";
  }
  myFunction()

  textActive.textContent = '1';
  activeInpute5000.classList.remove('active-item');
  activeText5000.classList.remove('active_label-text-span');

  activeInpute2000.classList.remove('active-item');
  activeText2000.classList.remove('active_label-text-span');

  activeInpute1000.classList.remove('active-item');
  activeText1000.classList.remove('active_label-text-span');

  activeInpute500.classList.remove('active-item');
  activeText500.classList.remove('active_label-text-span');

  activeInpute250.classList.remove('active-item');
  activeText250.classList.remove('active_label-text-span');

  activeInpute100.classList.remove('active-item');
  activeText100.classList.remove('active_label-text-span');

  activeInpute50.classList.remove('active-item');
  activeText50.classList.remove('active_label-text-span');

  activeInpute25.classList.add('active-item');
  activeText25.classList.add('active_label-text-span');

  if(textActive.textContent === '1') {
    textPandas.textContent = 'Panda diet for the day.'
  } 
  if(textActive.textContent != '1') {
    textPandas.textContent = 'Panda diet for the day.'
  } 
  if(textActive.textContent > 25 && textActive.textContent < 50) {
    textPandas.textContent = 'Panda diet for the day.'
  } 

}
activeInpute25.addEventListener("click", activeit25);



function updateValue(e) {
  
  if (input.value === "5000") {
    activeit5000()
  } else if (input.value === "2000") {
    activeit2000()
  } else if (input.value === "1000") {
    activeit1000()
  } else if (input.value === "500") {
    activeit500()
  } else if (input.value === "250") {
    activeit250()
  } else if (input.value === "100") {
    activeit100()
  } else if (input.value === "50") {
    activeit50()
  } else if (input.value === "25") {
    activeit25()
  } else {
    let n = Math.floor(input.value / 25)

    textActive.textContent = n;
    
  activeInpute5000.classList.remove('active-item');
  activeText5000.classList.remove('active_label-text-span');

  activeInpute2000.classList.remove('active-item');
  activeText2000.classList.remove('active_label-text-span');

  activeInpute1000.classList.remove('active-item');
  activeText1000.classList.remove('active_label-text-span');

  activeInpute500.classList.remove('active-item');
  activeText500.classList.remove('active_label-text-span');

  activeInpute250.classList.remove('active-item');
  activeText250.classList.remove('active_label-text-span');

  activeInpute100.classList.remove('active-item');
  activeText100.classList.remove('active_label-text-span');

  activeInpute50.classList.remove('active-item');
  activeText50.classList.remove('active_label-text-span');

  activeInpute25.classList.remove('active-item');
  activeText25.classList.remove('active_label-text-span');
    
  }
  
}

input.addEventListener('input', updateValue);






