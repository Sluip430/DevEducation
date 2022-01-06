//1.Составьте алгоритм, который считает, сколько времени вам нужно на приготовление яиц.

const getCookingTime = (eggsAmount) => console.log(Math.ceil(eggsAmount / 5) * 5);

getCookingTime(0); //returns 0
getCookingTime(5); //returns 5
getCookingTime(9); //returns 10 (because capacity is 5 so we need to do it 2 times)

// //2.Получая массив чисел. Все они либо нечетные, либо четные, кроме одного. Тебе нужно его найти.

const arrayOne = [2,4,5,6,8];
const arrayTwo = [1,3,4,5,7];

const findOneAnother = (array) =>{
    let result = 0;
    let sumArray = 0;
    array.slice(0,3).forEach(item => {
        sumArray += item;
    })
    sumArray % 2 === 0 ? result = findEven(array) : result = findNotEven(array);
    return result;
}

const findEven = (array) =>{
    let result;
    array.forEach(item =>{
        if (item % 2 === 0) 
            result = item
    });
    return result
}

const findNotEven = (array) =>{
    let result
    array.forEach(item =>{
        if (item % 2 === 1) 
            result = item
    });
    return result
}
console.log(findOneAnother(arrayOne));
console.log(findOneAnother(arrayTwo));

//3. Принимая массив объектов и случайную строку. У объектов может быть ключ: «title» с разными значениями. Создайте алгоритм, который фильтрует массив, заданный как первый параметр, и возвращает массив объектов, которые содержат в своих заголовках заданную строку в качестве второго параметра (без учета регистра).

const findTitle = (array, string) => {
    let tempStrCheck;
    let resultArray = [];
    array.forEach(item => {
        if (String(Object.keys(item)) === "title" ){
            tempStrCheck = String(Object.values(item)).toLowerCase();
            if (tempStrCheck.indexOf(string) !== -1){
                resultArray.push(item);
            }
        }
    })
    return console.log(resultArray);
}
let arr = [{title: 'Some title1'}, {title: 'I like JS'}, {user: 'This obj doesn\’t have key title js'}, {title: 'Js - is the best!'}];
findTitle(arr, 'js'); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]
    
//4. Принимая строку, ваша функция должна вернуть обьект, в котором ключи – символы строки, значение – количество повторений символов в строке

const countCharacters = (string) => {
    const result = [...string].reduce((item, index) => { 
        item[index] = item[index] ? item[index] + 1 : 1;
        return item 
    },); 
return result;
}
console.log(countCharacters("sparrow")) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters("aabcddeffge")) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
console.log(countCharacters("a 2ab !d")) // should return {a: 2, b:1, d:1, 2:1}

//5. Принимая число, ваша функция должна найти следующий положительный палиндром большего размера.

const getNextPalindrome = (number) => {
    number ++;
    if (number <= 10) return console.log(11);
    let numToStr = String(number);
    let reverse = "";
    for (let i = String(number).length - 1; i >= 0; i--) {
        reverse += String(number)[i];
    }
    if (numToStr === reverse){
        return console.log(number)
    }else{
        getNextPalindrome(number);
    }
}
getNextPalindrome(7) // returns 11
getNextPalindrome(99) //returns 101
getNextPalindrome(132) // returns 141
getNextPalindrome(888) // returns 898
getNextPalindrome(999) // returns 1001