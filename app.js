let input = document.querySelector(".input");
let addButton = document.querySelector(".addButton");
let doneButton = document.querySelector(".doneButton");
let task = document.querySelector(".task");
let array = [];
let displayMessage;

addButton.addEventListener("click", function(){
    let newTask = {
        task : input.value,
        done: false
    };
    array.push(newTask);
    console.log(array);
    showList();
});

function showList(){
    displayMessage = ``;
    array.forEach(function(item, index){
         displayMessage += `
        <li>
            <input type="checkbox" id="id${index}" ${item.done ? "checked" : ""}>
            <label for="id${index}">${item.task}</label>
        </li>
        `;
        task.innerHTML = displayMessage;
    });
    localStorage.setItem("localArray", JSON.stringify(array));
}

if (localStorage.getItem("localArray")){
    array = JSON.parse(localStorage.getItem("localArray"));
    showList();
}

task.addEventListener("change", function(item){
    let idInput = item.target.getAttribute("id");
    let forInput = task.querySelector("[for=" + idInput + "]");
    let forValue = forInput.innerHTML;
    array.forEach(function(item){
        if (item.task === forValue){
            item.done = !item.done;
        }
    });
    localStorage.setItem("localArray", JSON.stringify(array));

    console.log(forValue);
})


doneButton.addEventListener("click", function(){
    array.forEach(function(item, index){
        if(item.done){
            array.splice(index, 1);
        }
        showList();
        localStorage.setItem("localArray", JSON.stringify(array));
    });
    
});
