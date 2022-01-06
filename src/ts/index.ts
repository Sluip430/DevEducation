import "/css/style.css"

const windowImg = document.querySelector('.windowImg') as HTMLImageElement;
const buttonWindow = document.querySelector('.buttonWindow') as HTMLButtonElement;
const buttons = document.querySelector('.buttons');
const images = document.querySelector('.images');
const axios = require('axios');
const arrayImageDom = [];
let newArray = [];
let currentPage;

const options = {
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/photos?_limit=30',
};

const getData = async (options) => {
    try {
        const response = await axios.request(options);
        toArray(response.data);
    }catch (error){
        console.log(error);
    } 
}

const toArray = (array) => {
    array.forEach(function(item){
        newArray.push({
            miniImg : item.thumbnailUrl,
            bigImg : item.url
        });
    })
    inputImage(0);
}

const inputImage = (num) => {
    newArray.slice((num * 6), (num * 6) + 6).forEach((item, index) => {
        arrayImageDom[index].src = newArray[num*6 + index].miniImg;
    })
    currentPage = num;
} 

const showBigImage = (text) => {
    let num = Number(text[5]);
    windowImg.src = newArray[(currentPage)*6 + num -1].bigImg;
    windowImg.style.visibility = "visible";
    buttonWindow.style.visibility = "visible";
}

function closeWindow () {
    buttonWindow.style.visibility = "hidden";
    windowImg.style.visibility = "hidden";
}

const getImgDOM = (num) => {
    if (num === 0){
        return
    }else{
        arrayImageDom.unshift(document.querySelector(`.image${num}`));
        num--
        getImgDOM(num)
    }
}

buttons.addEventListener('click', (event) =>{
    let attribute = <HTMLElement>event.target;
    inputImage(attribute.getAttribute('id'));
})

images.addEventListener('click', (event) =>{
    let attribute = <HTMLElement>event.target;
    showBigImage(attribute.getAttribute('class'));
})

buttonWindow.addEventListener("click" , () => {
    closeWindow();
});

getImgDOM(6);
getData(options);
