import { View } from './view';
import { Model } from './model';
import { task } from '.';

export class Controller {
    constructor(){
        this.model = new Model;
        this.view = new View;
        this.checkLocalStorage();
    }

    checkLocalStorage(){
        if (localStorage.getItem("localArray")){
            this.model.array = JSON.parse(localStorage.getItem("localArray"));
            this.view.renderList(this.model);
        }
    }

    getTask(value){
        let newTask = {
            task : value,
            done : false
        };
        this.model.array.push(newTask);
        this.view.renderList(this.model);
    }

    onChenge(item){
        let idInput = item.target.getAttribute("id");
        let forInput = task.querySelector("[for=" + idInput + "]");
        let forValue = forInput.innerHTML;
        this.model.array.forEach(function(item){
            if (item.task === forValue){
             item.done = !item.done;
            }
        });
        localStorage.setItem("localArray", JSON.stringify(this.model.array));
    }

    onDoneClick(){
        this.model.array.forEach(function(item, index){
            if(item.done){
                this.model.array.splice(index, 1);
            }
            localStorage.setItem("localArray", JSON.stringify(this.model.array));
        }.bind(this));
        this.view.renderList(this.model);
    }
}