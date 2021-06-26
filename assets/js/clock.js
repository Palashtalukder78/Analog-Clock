const anaSecond = document.querySelector("[data-second-hand]");
const anaMinutes = document.querySelector("[data-minute-hand]");
const anaHour = document.querySelector("[data-hour-hand]");

function setClock(){
    const currentDate   = new Date();
    
    const theSecond     = currentDate.getSeconds();
    const theMinutes    = currentDate.getMinutes();
    const theHour      = currentDate.getHours();

    const secondRatio   = theSecond /60;
    const minutesRatio  = (secondRatio+theMinutes) /60;
    const hourRatio     = (minutesRatio+theHour) /12;

    setratio(anaSecond,secondRatio);
    setratio(anaMinutes,minutesRatio);
    setratio(anaHour,hourRatio);
}

function setratio(elm,rotationRatio){
    elm.style.setProperty("--rotation", rotationRatio * 360);
}

setInterval(setClock,1000);