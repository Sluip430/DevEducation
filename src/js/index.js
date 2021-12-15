
export const add = document.querySelector(".addButton");
export const done = document.querySelector(".doneButton");
export const input = document.querySelector(".input");
export const task = document.querySelector(".task");

import '../css/styles.css';
import { Controller } from './controller';


// class Model {
//     constructor(){
//         this.array = []
//     }
// }

// class Controller {
//     constructor(){
//         this.model = new Model;
//         this.view = new View;
//         this.checkLocalStorage();
//     }

//     checkLocalStorage(){
//         if (localStorage.getItem("localArray")){
//             this.model.array = JSON.parse(localStorage.getItem("localArray"));
//             this.view.renderList(this.model);
//         }
//     }

//     getTask(value){
//         let newTask = {
//             task : value,
//             done : false
//         };
//         this.model.array.push(newTask);
//         this.view.renderList(this.model);
//     }

//     onChenge(item){
//         let idInput = item.target.getAttribute("id");
//         let forInput = task.querySelector("[for=" + idInput + "]");
//         let forValue = forInput.innerHTML;
//         this.model.array.forEach(function(item){
//             if (item.task === forValue){
//              item.done = !item.done;
//             }
//         });
//         localStorage.setItem("localArray", JSON.stringify(this.model.array));
//     }

//     onDoneClick(){
//         this.model.array.forEach(function(item, index){
//             if(item.done){
//                 this.model.array.splice(index, 1);
//             }
//             localStorage.setItem("localArray", JSON.stringify(this.model.array));
//         }.bind(this));
//         this.view.renderList(this.model);
//     }
// }

// class View {
//     renderList(model){
//         let displayMessage = ``;
//         model.array.forEach(function(item, index){
//              displayMessage += `
//             <li>
//                 <input type="checkbox" id="id${index}" ${item.done ? "checked" : ""}>
//                 <label for="id${index}">${item.task}</label>
//             </li>
//             `;
//             task.innerHTML = displayMessage;
//         });
//         localStorage.setItem("localArray", JSON.stringify(model.array));
//     }
// }

const init = new Controller;

add.addEventListener('click', () =>{
    init.getTask(input.value);
});

task.addEventListener("change", (item) => {
    init.onChenge(item);
})

done.addEventListener("click", () => {
    init.onDoneClick()
});