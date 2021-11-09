//1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function sumNum() {
    let firstNum = 1;
    let lastNum = 99;
    let sumEvem = 0;
    let countEven = 0;
    for (firstNum; i <= lastNum; i++){
        if (i % 2 === 0){
            sumEvem += i;
            countEven++;
        }
    }
    console.log(`Sum of Numbers = "${sumEvem}" count of Numbers = "${countEven}"`);
}

//sumNum();

//2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isSimple(){
    let number = 139;
    let isSimple = true;
    for (let i = 2; i < number; i++){
        if (number % i === 0){
            isSimple = false;
            return console.log(isSimple); 
        }
    }
    console.log(isSimple);
}

//isSimple();

//3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function findNewSqrt(){
    let number = 122;
    let powNum = [0];
   
    for (let i = 0; i < number ; i++){
        powNum[i] = i * i;
    }
    let minPow = Math.abs(powNum[0] - number);
    let iMinPow = 0;
    for (let i = 1; i < number; i++){
        if (minPow > (Math.abs(powNum[i] - number))){
            minPow = Math.abs(powNum[i] - number);
            iMinPow = i;
        }
    }
    console.log(iMinPow);
}
//findSqrt();
//findNewSqrt();

//4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function fuct(){
    let number = 6;
    let fuct = 1;

    for (let i = 1; i <= number; i++){
        fuct = fuct * i;
    }
    console.log(fuct);
}
//fuct();

//5. Посчитать сумму цифр заданного числа
function sumOfNum(){
    let num = 123;
    let numStr = String(num);
    let sum = 0;
    for (let i = 0; i < numStr.length; i++){
        sum = sum + Number(numStr[i]);
    }
    console.log(sum);
}
//sumOfNum();

//6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function reversNum(){
    let num = 54321;
    let numStr = String(num);
    for (let i = numStr.length - 1; i >= 0; i--){
        process.stdout.write(numStr[i]);
    }
}
reversNum();