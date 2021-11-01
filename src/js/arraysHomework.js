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
findMaxIndex()