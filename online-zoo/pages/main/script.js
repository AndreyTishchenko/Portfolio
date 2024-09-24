const iconMenu = document.querySelector('.menu_icon'); 
const tittlePage =document.querySelector('.lg-text');
const logoActive = document.querySelector('.header_logo-text');
const closeBTN = document.querySelector('.close');


const BTN_LEFT = document.querySelector('.pets_left-btn')
const BTN_RIGHT = document.querySelector('.pets_right-btn')
const CAROUSEL = document.querySelector('.pets-cars-3')


const cardsPetsArr = [
  `<div class="card">
  <div class="card-img-hover">
    <img src="../../assets/images/giat-pandas.png" alt="giant Pandas" class="card-img">
  </div>
  <div class="card_tittle">
    <div class="card_tittle-text">
      <p class="card_name">giant pandas</p>
      <p class="card_desc">Native to Southwest China</p>
    </div>
    <img src="../../assets/images/banana.png" alt="banana" class="card_tittle-img">
  </div>
  </div>`,
  `<div class="card">
  <div class="card-img-hover">
    <img src="../../assets/images/eagles.png" alt="Eagles" class="card-img">
  </div>
  <div class="card_tittle">
    <div class="card_tittle-text">
      <p class="card_name">Eagles</p>
      <p class="card_desc">Native to South America</p>
    </div>
    <img src="../../assets/images/fish.png" alt="fish" class="card_tittle-img">
  </div>
</div>`,
  `<div class="card">
  <div class="card-img-hover">
    <img src="../../assets/images/gorillas.png" alt="Gorillas" class="card-img">
  </div>
  <div class="card_tittle">
    <div class="card_tittle-text">
      <p class="card_name">Gorillas</p>
      <p class="card_desc">Native to Congo</p>
    </div>
    <img src="../../assets/images/banana.png" alt="banana" class="card_tittle-img">
  </div>
</div>`,
  `<div class="card">
  <div class="card-img-hover">
    <img src="../../assets/images/two-toed.png" alt="Two-toed Sloth" class="card-img">
  </div>
  <div class="card_tittle">
    <div class="card_tittle-text">
      <p class="card_name">Two-toed Sloth</p>
      <p class="card_desc">Mesoamerica, South America</p>
    </div>
    <img src="../../assets/images/banana.png" alt="banana" class="card_tittle-img">
  </div>
</div>`,
  `<div class="card">
  <div class="card-img-hover">
    <img src="../../assets/images/cheetahs.png" alt="cheetahs" class="card-img">
  </div>
  <div class="card_tittle">
    <div class="card_tittle-text">
      <p class="card_name">cheetahs</p>
      <p class="card_desc">Native to Africa</p>
    </div>
    <img src="../../assets/images/fish.png" alt="fish" class="card_tittle-img">
  </div>
</div>`,
  `<div class="card">
  <div class="card-img-hover">
    <img src="../../assets/images/penguins.png" alt="Penguins" class="card-img">
  </div>
  <div class="card_tittle">
    <div class="card_tittle-text">
      <p class="card_name">Penguins</p>
      <p class="card_desc">Native to Antarctica</p>
    </div>
    <img src="../../assets/images/fish.png" alt="fish" class="card_tittle-img">
  </div>
</div>`,
  `<div class="card">
  <div class="card-img-hover">
    <img src="../../assets/images/aligators.png" alt="Alligators" class="card-img">
  </div>
  <div class="card_tittle">
    <div class="card_tittle-text">
      <p class="card_name">Alligators</p>
      <p class="card_desc">Native to Southeastern United States</p>
    </div>
    <img src="../../assets/images/banana.png" alt="banana" class="card_tittle-img">
  </div>
</div>`,
  `<div class="card">
  <div class="card-img-hover">
    <img src="../../assets/images/gorillas2.png" alt="Gorillas" class="card-img">
  </div>
  <div class="card_tittle">
    <div class="card_tittle-text">
      <p class="card_name">Gorillas</p>
      <p class="card_desc">Native to Congo</p>
    </div>
    <img src="../../assets/images/banana.png" alt="banana" class="card_tittle-img">
  </div>
</div>`
]


// slider section 3 
const randomNums = (numOfCards) => {
  const nums = new Set();
  while(nums.size !== numOfCards) {
      nums.add(Math.floor(Math.random() * 8));
  }
  return [...nums]
}

const createDefaultCardsWrapper = () => {
  const wrapper = document.createElement('div')
  wrapper.id = 'item-active';
  const numsArr = [...Array(6).keys()]
  wrapper.className = 'pets_cards'
  numsArr.map(el => wrapper.innerHTML += cardsPetsArr[el])
  return wrapper
}
const createRandomCardsWrapperleft = () => {
  const wrapper = document.createElement('div')
  wrapper.id = 'left';
  const randNumsArr = randomNums(6)
  wrapper.className = 'pets_cards'
  randNumsArr.map(el => wrapper.innerHTML += cardsPetsArr[el])
  return wrapper
}
const createRandomCardsWrapperright = () => {
  const wrapper = document.createElement('div')
  wrapper.id = 'right';
  const randNumsArr = randomNums(6)
  wrapper.className = 'pets_cards'
  randNumsArr.map(el => wrapper.innerHTML += cardsPetsArr[el])

  return wrapper
}

const turnOffBtns = () => {
  nextBtn.style.pointerEvents = 'none'
  prevBtn.style.pointerEvents = 'none'
}
const turnOnBtns = () => {
  nextBtn.style.pointerEvents = 'all'
  prevBtn.style.pointerEvents = 'all'
}

CAROUSEL.append(createRandomCardsWrapperleft())
CAROUSEL.append(createDefaultCardsWrapper())
CAROUSEL.append(createRandomCardsWrapperright())

const ITEM_LEFT = document.querySelector("#left");
const ITEM_RIGHT = document.querySelector("#right");

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);


CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItemLeft;
  let changedItemRight;
  let n
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItemLeft = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
    n = 1
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItemRight = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
    n = 2
  }


 if (n === 1) {
  changedItemLeft.innerHTML = "";
  // const block = createRandomCardsWrapperleft();
  // changedItemLeft.appendChild(block);

  const createRandomCardsWrapperleftNew = () => {
    const randNumsArr = randomNums(6)
    randNumsArr.map(el => changedItemLeft.innerHTML += cardsPetsArr[el])
    return changedItemLeft
    }
    createRandomCardsWrapperleftNew()
    console.log(changedItemLeft);
 }

 if (n === 2) {
  changedItemRight.innerHTML = "";
  // const block = createRandomCardsWrapperright();
  // changedItemRight.appendChild(block);

  const createRandomCardsWrapperrightNew = () => {
    const randNumsArr = randomNums(6)
    randNumsArr.map(el => changedItemRight.innerHTML += cardsPetsArr[el])
    return changedItemRight
    }
    createRandomCardsWrapperrightNew()
    console.log(changedItemRight);
 }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})
























//          popup
    const cardMichaelJohn = document.querySelector("#Michael-John");
    const popupMichaelJohn = document.querySelector(".Michael_John");
    const popMichaelJohn = () => {
      popupMichaelJohn.style.display = 'flex';
      document.body.classList.toggle('_lock');

      popupMichaelJohn.addEventListener("click", function(e) {
      if(!e.target.closest(".testimonials-card")) {
        popupMichaelJohn.style.display = 'none';
        document.body.classList.remove('_lock');
      }
    })
    }
    cardMichaelJohn.addEventListener("click", popMichaelJohn);

    

    const cardOskarSamborsky = document.querySelector("#Oskar-Samborsky");
    const popupOskarSamborsky = document.querySelector(".Oskar_Samborsky");
    const popOskarSamborsky = () => {
      popupOskarSamborsky.style.display = 'flex';
      document.body.classList.toggle('_lock');

      popupOskarSamborsky.addEventListener("click", function(e) {
        if(!e.target.closest(".testimonials-card")) {
          popupOskarSamborsky.style.display = 'none';
          document.body.classList.remove('_lock');
        }
      })
    }
    cardOskarSamborsky.addEventListener("click", popOskarSamborsky);

    const cardFrederickaMichelin = document.querySelector("#Fredericka-Michelin");
    const popupFrederickaMichelin = document.querySelector(".Fredericka_Michelin");
    const popFrederickaMichelin = () => {
      popupFrederickaMichelin.style.display = 'flex';
      document.body.classList.toggle('_lock');

      popupFrederickaMichelin.addEventListener("click", function(e) {
        if(!e.target.closest(".testimonials-card")) {
          popupFrederickaMichelin.style.display = 'none';
          document.body.classList.remove('_lock');
        }
      })
    }
    cardFrederickaMichelin.addEventListener("click", popFrederickaMichelin);

    const cardMilaRiksha = document.querySelector("#Mila-Riksha");
    const popupMilaRiksha = document.querySelector(".Mila_Riksha");
    const popMilaRiksha = () => {
      popupMilaRiksha.style.display = 'flex';
      document.body.classList.toggle('_lock');

      popupMilaRiksha.addEventListener("click", function(e) {
        if(!e.target.closest(".testimonials-card")) {
          popupMilaRiksha.style.display = 'none';
          document.body.classList.remove('_lock');
        }
      })
    }
    cardMilaRiksha.addEventListener("click", popMilaRiksha);

    const cardMichaelJohn2 = document.querySelector("#Michael-John2");
    const popupMichaelJohn2 = document.querySelector(".Michael_John");
    const popMichaelJohn2 = () => {
      popupMichaelJohn2.style.display = 'flex';
      document.body.classList.toggle('_lock');

      popupMichaelJohn2.addEventListener("click", function(e) {
        if(!e.target.closest(".testimonials-card")) {
          popupMichaelJohn2.style.display = 'none';
          document.body.classList.remove('_lock');
        }
      })
    }
    cardMichaelJohn2.addEventListener("click", popMichaelJohn2);

    const cardOskarSamborsky2 = document.querySelector("#Oskar-Samborsky2");
    const popupOskarSamborsky2 = document.querySelector(".Oskar_Samborsky2");
    const popOskarSamborsky2 = () => {
      popupOskarSamborsky.style.display = 'flex';
      document.body.classList.toggle('_lock');
      popupOskarSamborsky2.addEventListener("click", function(e) {
        if(!e.target.closest(".testimonials-card")) {
          popupOskarSamborsky2.style.display = 'none';
          document.body.classList.remove('_lock');
        }
      })
    }
    cardOskarSamborsky2.addEventListener("click", popOskarSamborsky2);

    const cardFrederickaMichelin2 = document.querySelector("#Fredericka-Michelin2");
    const popupFrederickaMichelin2 = document.querySelector(".Fredericka_Michelin2");
    const popFrederickaMichelin2 = () => {
      popupFrederickaMichelin2.style.display = 'flex';
      document.body.classList.toggle('_lock');
    
    }
    popupFrederickaMichelin2.addEventListener("click", function(e) {
      if(!e.target.closest(".testimonials-card")) {
        popupFrederickaMichelin2.style.display = 'none';
        document.body.classList.remove('_lock');
      }
    })
    cardFrederickaMichelin2.addEventListener("click", popFrederickaMichelin2);

    const cardMilaRiksha2 = document.querySelector("#Mila-Riksha2");
    const popupMilaRiksha2 = document.querySelector(".Mila_Riksha2");
    const popMilaRiksha2 = () => {
      popupMilaRiksha2.style.display = 'flex';
      document.body.classList.toggle('_lock');
      popupMilaRiksha2.addEventListener("click", function(e) {
        if(!e.target.closest(".testimonials-card")) {
          popupMilaRiksha2.style.display = 'none';
          document.body.classList.remove('_lock');
        }
      })
    }
    cardMilaRiksha2.addEventListener("click", popMilaRiksha2);










    //closeBTN
    const closeBtn1 = document.querySelector(".popup-close1");
    const closeBtnMichaelJohn = () => {
      popupMichaelJohn.style.display = 'none';
      popupOskarSamborsky.style.display = 'none';
      document.body.classList.remove('_lock');
      
    }
    closeBtn1.addEventListener("click", closeBtnMichaelJohn);

    


    const closeBtn2 = document.querySelector(".popup-close2");
    const closeOskarSamborsky = () => {
      popupOskarSamborsky.style.display = 'none';
      document.body.classList.remove('_lock');
    }
    closeBtn2.addEventListener("click", closeOskarSamborsky);

    const closeBtn3 = document.querySelector(".popup-close3");
    const closeFrederickaMichelin = () => {
      popupFrederickaMichelin.style.display = 'none';
      document.body.classList.remove('_lock');
    }
    closeBtn3.addEventListener("click", closeFrederickaMichelin);

    const closeBtn4 = document.querySelector(".popup-close4");
    const closeMilaRiksha = () => {
      popupMilaRiksha.style.display = 'none';
      document.body.classList.remove('_lock');
    }
    closeBtn4.addEventListener("click", closeMilaRiksha);

    const closeBtn5 = document.querySelector(".popup-close5");
    const closeBtnMichaelJohn2 = () => {
      popupMichaelJohn2.style.display = 'none';
      popupOskarSamborsky2.style.display = 'none';
      document.body.classList.remove('_lock');
    }
    closeBtn5.addEventListener("click", closeBtnMichaelJohn2);

    const closeBtn6 = document.querySelector(".popup-close6");
    const closeOskarSamborsky2 = () => {
      popupOskarSamborsky2.style.display = 'none';
      document.body.classList.remove('_lock');
    }
    closeBtn6.addEventListener("click", closeOskarSamborsky2);

    const closeBtn7 = document.querySelector(".popup-close7");
    const closeFrederickaMichelin2 = () => {
      popupFrederickaMichelin2.style.display = 'none';
      document.body.classList.remove('_lock');
    }
    closeBtn7.addEventListener("click", closeFrederickaMichelin2);

    const closeBtn8 = document.querySelector(".popup-close8");
    const closeMilaRiksha2 = () => {
      popupMilaRiksha2.style.display = 'none';
      document.body.classList.remove('_lock');
    }
    closeBtn8.addEventListener("click", closeMilaRiksha2);


    

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
const scrollRange = document.querySelector('.scroll-range')

scrollRange.addEventListener('input', () => {
  if (window.innerWidth < 1600) {
      scrollRange.max = 1615
  }
  if (window.innerWidth >= 1600) {
      scrollRange.max = 1200
  }
  let sliderVal = scrollRange.value
  
  document.querySelector('.testimonials-cards').style.transform = `translate(-${sliderVal}px)`
})



// карусель

