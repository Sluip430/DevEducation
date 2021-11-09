//1. Получить строковое название дня недели по номеру дня. 
function getDay() {
    let numDay = 31;
    isFind = false;
    while(!isFind){
        if (numDay >= 7){
            numDay -=7;
        }else{
            isFind = true;
        }
    }
    switch(numDay){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        default:
            console.log("Saturday");
            break;
    }
}
//getDay();

//2. *Найти расстояние между двумя точками в двухмерном декартовом пространстве.
function findLong(){
    const firstDot = [14,12];
    const secondDot = [-5, -3];
    let long = Math.sqrt(Math.pow(Math.abs(firstDot[0] - secondDot[0]),2) + Math.pow(Math.abs(firstDot[1] - secondDot[1]),2)); 
    //Sorry for use Math. ill show you in arrays.js how i do sqrt and pow;
    console.log(long);
}
//findLong();

//3. *Вводим число(0-999 999 999 999), получаем строку с прописью числа.
//Рекурсивная функция для определения параметров числа и рекурсивного вывода чисел грубо говоря по 3
function getStringNum(number) {
    let stringNumber = String(number);
    let temp;
    let count;
    switch(true){
        case (stringNumber.length % 3 == 0):
            count = stringNumber.length / 3;
            break;
        case (stringNumber.length % 3 == 1):
            count = (stringNumber.length + 2) / 3;
            break;
        default:
            count = (stringNumber.length + 1) / 3;
            break;
    }
    temp = Math.trunc(number / (Math.pow(1000,count - 1)));
    getStringThreeNum(temp);
    getZero(count);
    number = number - (temp*(Math.pow(1000,count - 1)));
    if (number > 0){
        getStringNum(number);
    }
}
//Функция написания слов милиард милион тысяч
function getZero(number){
    switch(number){
        case 4:
            process.stdout.write(" Bilion ");
            break;
        case 3:
            process.stdout.write(" Milion ");
            break;
        case 2:
            process.stdout.write(" Thousand ");
    }
}
//Функция вывведению в консоль трехзначного числа
function getStringThreeNum(number){
    num = number;
    if (number > 99 && number < 1000){
        num = Math.trunc(num / 100);
        getStrOneNum(num);
        process.stdout.write(" Hundred ");
        number = number - (num * 100);
    }
    if (number > 9 && number < 100){
        let isException = getStrTwoNum(number);
        if (!isException){
            num = Math.trunc(number / 10);
            number = number - (num * 10);
            getStrOneNum(number);
        }else{
            return;
        }
    }else{
        getStrOneNum(number);
    }
}
//Функция вывведению в консоль однозначного числа
function getStrOneNum(number){
    switch(number){
        case 0:
            process.stdout.write("Zero");
            break;
        case 1:
            process.stdout.write("One");
            break;
        case 2:
            process.stdout.write("Two");
            break;
        case 3:
            process.stdout.write("Three");
            break;
        case 4:
            process.stdout.write("Four");
            break;
        case 5:
            process.stdout.write("Five");
            break;
        case 6:
            process.stdout.write("Six");
            break;
        case 7:
            process.stdout.write("Seven");
            break;
        case 8:
            process.stdout.write("Eight");
            break;
        default:
            process.stdout.write("Nine");
            break;
    }
}
//Функция вывведению в консоль двухзначного числа
function getStrTwoNum(number){
    if (number < 20 && number > 9){
        getTwoNumException(number);
        return true;
    }else{
        number = Math.trunc(number / 10);
        switch(number){
            case 0:
                process.stdout.write("");
                break;
            case 2:
                process.stdout.write("Twenty ");
                break;
            case 3:
                process.stdout.write("Thirty ");
                break;
            case 4:
                process.stdout.write("Fourty ");
                break;
            case 5:
                process.stdout.write("Fifty ");
                break;
            case 6:
                process.stdout.write("Sixty ");
                break;
            case 7:
                process.stdout.write("Seventy ");
                break;
            case 8:
                process.stdout.write("Eighty ");
                break;
            default:
                process.stdout.write("Ninety ");
                break;
        }
        return false;
    }
}
//Функция вывведению в консоль двухзначного числа с учетом некоторых специальных слов
function getTwoNumException(number){
    switch(number){
        case 10:
            process.stdout.write("Ten ");
            break;
        case 11:
            process.stdout.write("Eleven ");
            break;
        case 12:
            process.stdout.write("Twelve ");
            break;
        case 13:
            process.stdout.write("Thirteen ");
            break;
        case 14:
            process.stdout.write("Fourteen ");
            break;
        case 15:
            process.stdout.write("Fifteen ");
            break;
        case 16:
            process.stdout.write("Sixteen ");
            break;
        case 17:
            process.stdout.write("Seventeen ");
            break;
        case 18:
            process.stdout.write("Eighteen ");
            break;
        default:
            process.stdout.write("Nineteen ");
            break;
    }
}
//Вызов основной функции и ввод числа которое надо перевести в строку
//getStringNum(777666555444);

//4. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
//Очень плохой костыль от меня извиняюсь дед лайн приблизился и я не успел, все исправлю, извините
function getNumFromString(){
    let number = "Fifty Five"
    let temp = number.indexOf(" ");
    let myString = number.slice(0,temp);
    if (number.length > 13){
        switchOne(myString);
        let temp = number.indexOf("Hungred ");
        number = number.slice(temp+8,number.length);
        temp = number.indexOf(" ");
        myString = number.slice(0,temp);
        switchTwo(myString);
        myString2 = number.slice(temp+1,number.length);
        switchOne(myString);
    }else{
        switchTwo(myString);
        myString = number.slice(temp+1,number.length);
        switchOne(myString);
    }
}

function switchOne(string){
    switch (string){
        case "One" :
            process.stdout.write("1");
            break;
        case "Two" :
            process.stdout.write("2");
            break;
        case "Three" :
            process.stdout.write("3");
            break;
        case "Four" :
            process.stdout.write("4");
            break;
        case "Five" :
            process.stdout.write("5");
            break;
        case "Six" :
            process.stdout.write("6");
            break;
        case "Seven" :
            process.stdout.write("7");
            break;
        case "Eight" :
            process.stdout.write("8");
            break;
        default :
            process.stdout.write("9");
            break;
    }
}

function switchTwo(string){
    switch (string){
        case "One" :
            process.stdout.write("1");
            break;
        case "Twenty" :
            process.stdout.write("2");
            break;
        case "Thirty" :
            process.stdout.write("3");
            break;
        case "Fourty" :
            process.stdout.write("4");
            break;
        case "Fifty" :
            process.stdout.write("5");
            break;
        case "Sixty" :
            process.stdout.write("6");
            break;
        case "Seventy" :
            process.stdout.write("7");
            break;
        case "Eighty" :
            process.stdout.write("8");
            break;
        default :
            process.stdout.write("9");
            break;
    }
}
//getNumFromString();