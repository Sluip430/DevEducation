//1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.

function getCookingTime (eggsAmount) {
    return console.log(Math.ceil(eggsAmount / 5) * 5);
}

//getCookingTime(0); //returns 0
//getCookingTime(5); //returns 5
//getCookingTime(9); //returns 10 (because capacity is 5 so we need to do it 2 times)

//2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

let arrayOne = [2,4,5,6,8];
let arrayTwo = [1,3,4,5,7];

function findOneAnother(array){
    let result;
    let sumArray;
    for (let i = 0; i < 3; i++){
        sumArray = array[i];
    }
    if (sumArray % 2 === 0){
        result = findEven(array);
    }else{
        result = findNotEven(array);
    }
    return result;
}

function findEven(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            return array[i];
        }
    }
}

function findNotEven(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 1){
            return array[i];
        }
    }
}

//findOneAnother(arrayOne);
//findOneAnother(arrayTwo);

//3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

function findTitle(array, string) {
    let tempStrCheck;
    let resultArray = [];
    for (let i = 0; i < array.length; i++){
        if (String(Object.keys(array[i])) === "title" ){
            tempStrCheck = String(Object.values(array[i])).toLowerCase();
            if (tempStrCheck.indexOf(string) !== -1){
                resultArray.push(array[i]);
            }
        }
    }
    return console.log(resultArray)
}
let arr = [{title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn\’t have key title js'}, {title: 'Js - is the best!'}];
//findTitle(arr, 'js'); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]
    
//4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке
function countCharacters(string) {
    let result = {};
    let countValues;
    for (let i = 0; i < string.length; i++){
        countValues = 0;
        for(let j = 0; j < string.length; j++){
            if (string[i] === string[j]){
                countValues++
            }
        }
        Object.assign(result, {[string[i]] : countValues});
    }
    return console.log(result);
}
//countCharacters("sparrow") // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
//countCharacters("aabcddeffge") // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
//countCharacters("a 2ab !d") // should return {a: 2, b:1, d:1, 2:1}

//5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

function getNextPalindrome(number) {
    number ++;
    if (number <= 10)
        return console.log(11);
    let numToStr = String(number);
    let reverse = "";
    for (var i = String(number).length - 1; i >= 0; i--) {
        reverse += String(number)[i];
    }
        if (numToStr === reverse){
            return console.log(number)
        }else{
            getNextPalindrome(number);
        }
}
// getNextPalindrome(7) // returns 11
// getNextPalindrome(99) //returns 101
// getNextPalindrome(132) // returns 141
// getNextPalindrome(888) // returns 898
// getNextPalindrome(999) // returns 1001

//6. Создать структуру данных Set, используя объект, создать методы add, remove, has
// Шестрое задание я пока не смог сделать, у меня проблемы с представлением структуры данных в JS используя обьекты, а поскольку я и так уже просрочил сдачу домашки прошу
// не убивать меня, я обязательно доделаю и скину решение вам в личку с структурой данных Set.
let Set = {
    0 : 0,
    add:function(string){
        if ([key] == 0){
          //  [1] : string;
        }
    },
    remove:function(string){

    },
    has:function(string){

    }
}