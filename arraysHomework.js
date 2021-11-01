//1. Найти минимальный элемент массива
function findMinElem() {
    let array = [2,4,6,8,12,1]
    let minElem = array[0];
    for (let i = 1; i < array.length; i++){
        if (minElem > array[i]){
            minElem = array[i];
        }
    }
    console.log(minElem);
}
//findMinElem();

//2. Найти максимальный элемент массива
function findMaxElem() {
    let array = [2,4,6,8,12,1]
    let maxElem = array[0];
    for (let i = 1; i < array.length; i++){
        if (maxElem < array[i]){
            maxElem = array[i];
        }
    }
    console.log(maxElem);
}
//findMaxElem();

//3. Найти индекс минимального элемента массива
function findMinIndex(){
    let array = [2,4,6,8,12,1]
    let minElem = array[0];
    let indexMin = 0;
    for (let i = 1; i < array.length; i++){
        if (minElem > array[i]){
            minElem = array[i];
            indexMin = i;
        }
    }
    console.log(indexMin+1);
}
//findMinIndex()

//4. Найти индекс максимального элемента массива 
function findMaxIndex() {
    let array = [2,4,6,8,12,1]
    let maxElem = array[0];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++){
        if (maxElem < array[i]){
            maxElem = array[i];
            maxIndex = i;
        }
    }
    console.log(maxIndex+1);
}
//findMaxIndex()

//5. Посчитать сумму элементов массива с нечетными индексами
function calcSumElem(){
    let array = [2,4,6,8,12,1];
    let sum = 0;

    for (let i = 1; i < array.length; i = i +2){
        sum += array[i];
    }
    console.log(sum);
}
//calcSumElem()

//6. Сделать реверс массива (массив в обратном направлении)
function getReverse(){
    let array = [2,4,6,8,12,1];
    let revArray = [];

    for (let i = 0; i < array.length; i++){
        revArray[array.length - i - 1] = array[i];
    }
    console.log(revArray);
}
//getReverse();

//7. Посчитать количество нечетных элементов массива
function culcCountElem(){
    let array = [2,4,6,8,12,1];
    let count = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 !== 0){
            count++;
        }
    }
    console.log(count);
}
//culcCountElem();

//8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2
function getHalfReverse(){
    let array = [2,4,6,3,8,12,1];
    let revArray = [];
    let countOfHalf = 0;

    if (array.length % 2 === 1){
        countOfHalf = (array.length - 1) / 2;
        for (let i = 0; i < countOfHalf; i++){
            revArray[countOfHalf + i + 1] = array[i];
            revArray[i] = array[countOfHalf + i + 1];
        }
        revArray[countOfHalf] = array[countOfHalf];
    }else{
        countOfHalf = array.length / 2;
        for (let i = 0; i < countOfHalf; i++){
            revArray[countOfHalf + i] = array[i];
            revArray[i] = array[countOfHalf + i];
        }
    }
    console.log(revArray);
}
//getHalfReverse();

//9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert)) 
function swap(a[0], b[1]) {
    return a[1], b[0];
}

function test() {
    let array1 = [2,4];
    console.log(array1);
    if (array1[0] < array1[1]){
        swap(array1[0], array1[1]);
        console.log(array1);
    }
}
test();

function bubbleSort() {
    let array = [2,4,6,3,8,12,1];
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < (array.length - i); j++){
            if (array[j] > array[j+1]){
                swap(array[j], array[j+1]);
            }
        }
    }
}
