"use strict";

class ToDoItem {
    constructor(title, description="", dueDate, priority, note = "", finished = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.note = note;
        this.finished = finished;
    }

    complete() {
        return this.finished = true;
    }

    getDetail() {
        return this;
    }
}

class ToDoList {
    constructor(list = []) {
        this.list = list;
    }

    add(...items) {
        items.forEach(item => {
            if (item instanceof ToDoItem) this.list.push(item);
            else return;
        });
    }

    remove(...items) {
        items.forEach(item => {
            let index = this.list.indexOf(item);
            if (this.list[item] == -1) return;
            this.list.splice(index, 1);
        });
    }
}

const listPanel = [];

const appLogic = () => {
    let title = document.querySelector("#title").value,
        description = document.querySelector("#description").value,
        dueDate = document.querySelector("#dueDate").value,
        priority = document.querySelector("#priority").value,
        note = document.querySelector("#note").value; 

    // Can use date-fns: date = format(new Date(), 'yyyy-MM-dd');     
    const current = new Date();
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", 
    "10", "11", "12"];
    const month = months[current.getMonth()]; 
    const date = `${current.getFullYear()}-${month}-${current.getDate()}`;

    console.log(dueDate); 

    function createTask() {
        if (!title || dueDate < date) return; 
        return new ToDoItem(title, description, dueDate, priority, note);
    }    
}

const interactDOM = () => {
    const app = document.querySelector("#app"); 
     
    function makeElement(identifier, type="div") { 
        let newElement = document.createElement(`${type}`);
        if (identifier.slice(0, 1) == ".") {
            newElement.classList.add(identifier.slice(1)); 
        }
        if (identifier.slice(0,1) == "#") {
            newElement.setAttribute("id", identifier.slice(1));
        }  
        return function setParent(parent) { 
            if (parent !== undefined) { 
                parent.appendChild(newElement);
                return function setAttr(type, value) { 
                    if (type !== undefined && value !== undefined) {
                        newElement.setAttribute(`${type}`, `${value}`);
                        return setAttr; 
                    }      
                    else return;
                }
            } else return;
        }
    }

    function writeTextContent(selector, textContent) {
        return document.querySelector(`${selector}`).textContent = textContent; 
    }

    function addList() { 
        let newList = new ToDoList(); 
        makeElement(".list")(app)("data-list", listPanel.length);
        listPanel.push(newList); 
    }

    return { 
        makeElement, 
        writeTextContent, 
        addList, 
        // addTask
    }
}

// Interfaces to connect the application logic to the DOM
(function DOMLoad() {
    const inputArea = document.querySelector("#input-area"); 

    const resetBtn = interactDOM().makeElement("#reset", "input")(inputArea)("type", "reset")("style", "visibility: hidden; position: absolute;") 
    
    interactDOM().makeElement(".warning")(inputArea);
    interactDOM().writeTextContent(".warning", "Warning!!!"); 

    document.querySelector(".addTask").addEventListener("click", (e) => {
        appLogic();
        document.querySelector("#reset").click(); 
        e.preventDefault(); 
    });
})();

(function test() { 
    function resetListPanel() { 
        listPanel = []; 
    }
    interactDOM().addList(); 
})(); 






