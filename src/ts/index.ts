import '../css/style.css';
// import { firstName, lastName, email, phoneNubmer, adress, submiButton, nameValid, emailValid, url} from './consains'
const firstName = document.querySelector(".first-name-input") as HTMLInputElement;
const lastName = document.querySelector(".last-name-input") as HTMLInputElement;
const email = document.querySelector(".email-input") as HTMLInputElement;
const phoneNubmer = document.querySelector(".phone-input") as HTMLInputElement;
const adress = document.querySelector(".adress-input") as HTMLInputElement;
const submiButton = document.querySelector(".submit-button");
const nameValid = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u
const emailValid = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
const result = document.querySelector(".result") as HTMLElement;
const url = 'http://localhost:8000/users';
let ansver : boolean;

function getValidaion() : boolean {
    if (!nameValid.test(firstName.value)){
        return false;
    }
    if (!nameValid.test(lastName.value)){
        return false;
    }
    if (!emailValid.test(email.value)){
        return false;
    }
    return true;
}

async function getDataForBody(){
    let dataBody = {
        "first_name": firstName.value,
        "last_name": lastName.value,
        "email": email.value,
        "phone" : phoneNubmer.value,
        "adress" : adress.value
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataBody),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
        result.innerHTML = JSON.stringify(json);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

submiButton.addEventListener('click', () => {
    ansver = getValidaion();
    console.log(ansver);
    if (ansver){
        getDataForBody();
    }
})



