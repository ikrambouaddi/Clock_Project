setInterval(setClock,1000)
const hourHand=document.querySelector('[data-hour-hand]')
const mintesHand=document.querySelector('[data-minutes-hand]')
const secondHand=document.querySelector('[data-second-hand]')


function setClock(){
    const currentData = new Date()
    const secoundResia = currentData.getSeconds()/60
    const minuteResia = (secoundResia + currentData.getMinutes())/60
    const hourResia = (minuteResia + currentData.getHours())/12
    setRotation(secondHand,secoundResia)
    setRotation(mintesHand,minuteResia)
    setRotation(hourHand,hourResia)
}

function setRotation (element, rotationRotia){
    element.style.setProperty('--rotation',rotationRotia * 360)
}
setClock()