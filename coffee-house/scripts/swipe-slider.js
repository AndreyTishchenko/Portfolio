// alert("Доброго времени суток проверяющий! Я не успел доделать все требования до конца и прошу тебя оставить свои контакты чтобы я мог с вами связатся когда доделаю.")
slider.addEventListener('touchstart', handleTouchStart, false)
slider.addEventListener('touchmove', handleTouchMove, false)
let x1 = null;
let y2 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMove(event) {
    if(!x1 || !y1){
        return false
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    if (Math.abs(xDiff) > Math.abs(yDiff)){
        if(xDiff > 0){
            previous_page()
        } else{
            next_page()
        } 
    }
    x1 = null;
    x2 = null;
}
