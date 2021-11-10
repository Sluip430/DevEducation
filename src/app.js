let result = document.getElementById("result").innerHTML;
result = "";
document.getElementById("result").innerHTML = result;
let isHaveRange = false;
let minNum = "";
let maxNum = "";
let arrayOfUsed = [];
let numException;

function generete(){
    if (!isHaveRange){
        getRange();
    }
    let randNum = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    if (arrayOfUsed.length === ((maxNum + 1) - minNum)){
        document.getElementById("generate").disabled = true;
        document.getElementById("result").innerHTML = "Elements are over";
    }
    numException = toUsedArray(randNum);
    if (numException === false){
        numException = null;
        generete();
    }
    document.getElementById("result").innerHTML = numException;
}

function getRange(){
    minNum = Number(document.getElementById("min").value);
    isNum(minNum);
    maxNum = Number(document.getElementById("max").value);
    isNum(maxNum);
    document.getElementById("min").disabled = true;
    document.getElementById("max").disabled = true;
    return isHaveRange = true
}

function isNum(value){
    if (value === 0){
        alert("Error! Enter a Number");
        document.getElementById("result").innerHTML = "Error! Enter a Number";
        return
    }
    if (typeof(value) !== "number"){
        alert("Error! Enter a Number");
        document.getElementById("result").innerHTML = "Error! Enter a Number";
        return
    }
}

function toUsedArray(number){
    let isMinusOne = arrayOfUsed.indexOf(number);
    if(isMinusOne === -1){
        arrayOfUsed.push(number);
        return number;
    }else{
        return false;
    }
}

function reset(){
    document.getElementById("min").disabled = false;
    document.getElementById("max").disabled = false;
    document.getElementById("generate").disabled = false;
    document.getElementById("min").value = '';
    document.getElementById("max").value = '';
    isHaveRange = false;
    arrayOfUsed = [];
    minNum = "";
    maxNum = "";
    document.getElementById("result").innerHTML = '';
}