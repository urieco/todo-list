"use strict";

class ToDoItem {
    constructor(title, description = "", dueDate, priority, note = "",
        finished = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.note = note;
        this.finished = finished;
    }

    complete() {
        this.finished = true;
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
let currentList = 0;

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

    function createTask() {
        if (!title || dueDate < date) return;
        let newTask = new ToDoItem(title, description, dueDate, priority, note);
        interactDOM().addTask(title, dueDate, priority, description, note);
        listPanel[currentList].add(newTask);
    }

    function createList() {
        let newList = new ToDoList();
        listPanel.push(newList);
        interactDOM().addList();
    }

    function finishTask(targetedTaskIndex) {
        listPanel[currentList].list[targetedTaskIndex].complete();
    }

    function removeTask(targetedTaskIndex) {
        listPanel[currentList].list.splice(targetedTaskIndex, 1);
    }

    function pickList(num) {
        currentList = num;
    }

    return {
        createList,
        createTask,
        finishTask,
        removeTask
    }
}

const interactDOM = () => {
    const app = document.querySelector("#app");

    function makeElement(identifier, type = "div") {
        let newElement = document.createElement(`${type}`);
        if (identifier.slice(0, 1) == ".") {
            newElement.classList.add(identifier.slice(1));
        }
        if (identifier.slice(0, 1) == "#") {
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
                    else return newElement;
                }
            }
            else return newElement;
        }
    }

    function addList() {
        makeElement(".list")(app)("data-list", listPanel.length - 1);
    }

    function addTask(title, dueDate, priority, description, note) {
        let pickedList = document.querySelector(`[data-list="${currentList}"]`);
        let currentTaskOrder = listPanel[currentList].list.length;

        // List name:    
        if (currentTaskOrder == 0 && pickedList.textContent == "") {
            let listName = pickedList.getAttribute("name");
            listName = listName != undefined ? listName : currentList;
            makeElement(".list-name", "span")(pickedList)()
                .textContent = `List ${currentList}: `;
        }

        makeElement(".task", "span")(pickedList)("data-task", currentTaskOrder);
        let DOMtask = document.querySelector(`span[data-task="${currentTaskOrder}"]`);
        DOMtask.textContent =
            `TITLE: ${title} | DUE DATE: ${dueDate} | PRIORITY: ${priority}   `;

        let priorityColor = priority == "High" ? "pink"
            : (priority == "Medium" ? "yellow" : "yellowgreen");
        DOMtask.setAttribute("style", `background-color: ${priorityColor}`);

        let btnContainer = makeElement(".button-container")(DOMtask);
        // Finish Btn
        addButton(".finish", btnContainer());

        // Remove Btn
        addButton(".remove", btnContainer());

        let details = makeElement(".detail")(pickedList)("data-task", currentTaskOrder);
        details().classList.add("hidden");
        details().innerText = `DESCRIPTION: ${description}\nNOTE: ${note}`;
        DOMtask.addEventListener("mouseover", () => {
            details().classList.toggle("hidden");
        });
        DOMtask.addEventListener("mouseleave", () => {
            details().classList.toggle("hidden");
        });
    }

    function addButton(identifier, parent) {
        const btn = makeElement(identifier, "button")(parent);
        // span.task > div.button-container > button.remove
        const targetedTaskIndex = Number(btn().parentNode
            .parentNode.getAttribute("data-task"));
        if (identifier == ".remove") {
            btn().textContent = "X";
            btn().addEventListener("click", () => {
                btn().parentNode.parentNode.remove();
                document.querySelector(`.detail[data-task='${targetedTaskIndex}']`).remove();
                appLogic().removeTask(targetedTaskIndex);
                resetDataTaskIndex(targetedTaskIndex);
            });
        } else {
            btn().innerHTML = "&#10004;"
            btn().addEventListener("click", () => {
                btn().classList.toggle("done")
                appLogic().finishTask(targetedTaskIndex)
            });
        }
    }

    function resetDataTaskIndex(removedTaskIndex) {
        let allTasks = document.querySelectorAll
            (`.list[data-list='${currentList}'] .task`);
        allTasks.forEach(task => {
            let checkedTaskIndex = Number(task.getAttribute("data-task"));
            if (checkedTaskIndex < removedTaskIndex) return;
            else task.setAttribute("data-task", checkedTaskIndex - 1);
        });
    }


    return {
        makeElement,
        addList,
        addTask
    }
}

// Interfaces to connect the application logic to the DOM
(function DOMLoad() {
    const inputArea = document.querySelector("#input-area");

    interactDOM().makeElement("#reset", "input")(inputArea)
        ("type", "reset")("style", "visibility: hidden; position: absolute;");

    let warning = interactDOM().makeElement(".warning")(inputArea);
    warning().textContent = "Warning";

    document.querySelector(".addTask").addEventListener("click", (e) => {
        appLogic().createTask();
        // document.querySelector("#reset").click(); 
        e.preventDefault();
    });
})();

(function test() {
    function resetListPanel() {
        listPanel = [];
    }
})();

// Add a default list: 
appLogic().createList();
appLogic().createList();


