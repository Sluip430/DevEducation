import "/css/style.css"
//import {getImage , getArray , showBigImg, openFullPicture, closeWindow} from './app'
//import {array, buttonOne , buttonTwo, buttonThree , buttonFour, buttonFive , gallery , windowImg, buttonWindow} from './params'

getArray();

export let array = [];
export let buttonOne = document.querySelector(".button1");
export let buttonTwo = document.querySelector(".button2");
export let buttonThree = document.querySelector(".button3");
export let buttonFour = document.querySelector(".button4");
export let buttonFive = document.querySelector(".button5");
export let gallery = document.querySelector(".gallery");
export let windowImg = document.querySelector(".windowImg");
export let buttonWindow = document.querySelector(".buttonWindow");

export function getImage(number){
    for (let i = 0; i < 6; i++){
        document.querySelector(`.image${i+1}`).src = array[(i + (number * 6))].thumbnailUrl;
    }
}

export async function getArray() {
    try {
        await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => array = data)
    } catch (err) {
        console.log(err);
    }
    getImage(0);
}

export function showBigImg(event) {
    if (event.target && event.target.nodeName == "IMG") {
        let imgClass = event.target.getAttribute('class');
        let img = document.querySelector(`.${imgClass}`).src; 
        for (let i = 0; i < 5; i++){
            for (let j = 0; j < 6; j++){
                if (array[(i * 6 + j)].thumbnailUrl === img){
                    openFullPicture(array[(i * 6 + j)].url);
                }
            }
        }
    }
}

export function openFullPicture(url) {
    windowImg.src = url;
    windowImg.style.visibility = "visible";
    buttonWindow.style.visibility = "visible";
}

export function closeWindow () {
    buttonWindow.style.visibility = "hidden";
    windowImg.style.visibility = "hidden";
}

buttonOne.addEventListener("click", () => {
    getImage(0)
});
buttonTwo.addEventListener("click", () => {
    getImage(1)
});
buttonThree.addEventListener("click", () => {
    getImage(2)
});
buttonFour.addEventListener("click", () => {
    getImage(3)
});
buttonFive.addEventListener("click", () => {
    getImage(4)
});
gallery.addEventListener('click', showBigImg);
buttonWindow.addEventListener("click" , () => {
    closeWindow();
});