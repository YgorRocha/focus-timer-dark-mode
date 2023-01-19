// PAINEL DE CONTROLE DOS MINUTOS//

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const addPlus = document.querySelector('.plus')
const subtractMinus = document.querySelector('.minus')

// PAINEL DOS CARDS//
const florestAudio = document.querySelector('#florest')
const buttonFlorest = document.querySelector('.florest')

const rainAudio = document.querySelector('#rain')
const buttonRain = document.querySelector('.rain')

const coffeeShopAudio = document.querySelector('#coffee-shop')
const buttonCoffee = document.querySelector('.coffee-shop')

const fireAudio = document.querySelector('#fire')
const buttonFire = document.querySelector('.fire')

//Mudança de modo // 

const modoEscuro = document.querySelector('.modo-escuro')
const modoClaro = document.querySelector('.modo-claro')
const images = document.querySelectorAll('.cards img');
const buttonColor = document.querySelectorAll('.cards button');
const pressedButton = document.querySelector('.pressed');
const volumeControls = document.querySelectorAll('.volume')
const som = document.querySelector('.som')


const buttons = [buttonFlorest, buttonRain, buttonCoffee, buttonFire];
const audios  = [florestAudio, rainAudio, coffeeShopAudio, fireAudio];

const body = document.body


export {
    buttonPlay,
    buttonPause,
    addPlus,
    buttonStop,
    subtractMinus,
    minutesDisplay,
    secondsDisplay,

    modoEscuro,
    modoClaro,
    body,
    buttonColor,
    images,
    pressedButton,
    volumeControls,
    som,
    buttons,
    audios,
}