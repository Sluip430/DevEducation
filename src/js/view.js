import { task } from ".";

export class View {
    renderList(model){
        let displayMessage = ``;
        model.array.forEach(function(item, index){
             displayMessage += `
            <li>
                <input type="checkbox" id="id${index}" ${item.done ? "checked" : ""}>
                <label for="id${index}">${item.task}</label>
            </li>
            `;
            task.innerHTML = displayMessage;
        });
        localStorage.setItem("localArray", JSON.stringify(model.array));
    }
}