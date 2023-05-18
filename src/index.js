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

let list1 = new ToDoList();
let list2 = new ToDoList();
let list3 = new ToDoList();
let item1 = new ToDoItem("A", "B", "2023-09-11", "Low");
let item2 = new ToDoItem("A", "B", "2023-09-12", "Medium");
let item3 = new ToDoItem("A", "B", "2023-09-13", "High");

list1.add(item1);
list2.add(item1, item2);
list3.add(item1, item2, item3);

listPanel.push(list1);
listPanel.push(list2);
listPanel.push(list3);

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
        if (!title || dueDate < date) {
            interactDOM().warning();
            return;
        }
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

    function displayTask(list) {
        document.querySelectorAll("#app > .list").forEach(element => {
            element.classList.add("hidden");
        });
        let pickedList = document.querySelector(`.list[data-list='${list}']`);
        if (pickedList) pickedList.classList.remove("hidden");
    }

    function refreshAllTasks() {
        for (let listObject of listPanel) {
            addList();
        }

        let i = 0;
        document.querySelectorAll(".list").forEach(element => {
            element.setAttribute("data-list", i);
            i++;
        });

        for (let listObject of listPanel) {
            for (let task of listObject.list) {
                addTask(task.title, task.dueDate, task.priority,
                    task.description, task.note, listPanel.indexOf(listObject));
            }
        }
        resetDataTaskIndex(); 

        displayTask(currentList); 
    }


    function addList() {
        // list.Panel.length has already been updated -> minus 1
        makeElement(".list")(app)("data-list", listPanel.length - 1);
        listScroller();
    }

    function addTask(title, dueDate, priority, description, note, list = currentList) {
        let pickedList = document.querySelector(`.list[data-list="${list}"]`);
        let currentTaskOrder = listPanel[currentList].list.length;

        // List name:    
        if (currentTaskOrder == 0 && pickedList.textContent == "") {
            let listName = pickedList.getAttribute("name");
            listName = listName != undefined ? listName : currentList;
            makeElement(".list-name", "span")(pickedList)()
                .textContent = `List ${currentList}: `;
        }

        let DOMTask = makeElement(".task")(pickedList)("data-task", currentTaskOrder);

        DOMTask().textContent =
            `TITLE: ${title} | DUE DATE: ${dueDate} | PRIORITY: ${priority}   `;

        let priorityColor = priority == "High" ? "pink"
            : (priority == "Medium" ? "yellow" : "yellowgreen");
        DOMTask().setAttribute("style", `background-color: ${priorityColor}`);

        let btnContainer = makeElement(".button-container")(DOMTask());
        // Finish Btn
        addButton(".finish", btnContainer());

        // Remove Btn
        addButton(".remove", btnContainer());

        let details = makeElement(".detail")(pickedList)("data-task", currentTaskOrder);
        details().classList.add("hidden");
        details().innerText = `DESCRIPTION: ${description}\nNOTE: ${note}`;
        DOMTask().addEventListener("mouseover", () => {
            details().classList.toggle("hidden");
        });
        DOMTask().addEventListener("mouseleave", () => {
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
                document.querySelector
                    (`.detail[data-task='${targetedTaskIndex}']`).remove();
                appLogic().removeTask(targetedTaskIndex);
                resetDataTaskIndex();
            });
        } else {
            btn().innerHTML = "&#10004;"
            btn().addEventListener("click", () => {
                btn().classList.toggle("done")
                appLogic().finishTask(targetedTaskIndex)
            });
        }
    }

    function resetDataTaskIndex() {
        document.querySelectorAll(".list").forEach(element => {
            if (element.hasChildNodes()) { 
                let children = element.childNodes;
                let u = 0;
                for (let node of children) { 
                    if (node.className == "task") {
                        node.setAttribute("data-task", u); 
                        u++; 
                    }    
                }
            }
        });
    }

    function listScroller() {
        const allScrollerItem = document.querySelectorAll(".scroller-container > div");
        allScrollerItem.forEach(element => element.remove());

        for (let list of listPanel) {
            const scrollerItem = makeElement(".scroller-item")
                (document.querySelector(".scroller-container"))
                ("data-list", listPanel.indexOf(list));

            let listNameIndex = Number(scrollerItem().getAttribute("data-list"));

            let listName = document.querySelector(`.list[data-list='${listNameIndex}']`);
            if (listName) listName = listName.getAttribute("name");
            scrollerItem().textContent = listName != undefined ?
                listName : listNameIndex;

            makeElement(".image", "img")(scrollerItem())("src", "./images/folder.svg");

            scrollerItem().addEventListener("click", () => {
                document.querySelectorAll(".scroller-item").forEach(element => {
                    element.classList.remove("selected");
                })
                scrollerItem().classList.toggle("selected");
                currentList = listNameIndex;
                displayTask(currentList);
            });
        }

        let selecedList = document.querySelector
            (`.scroller-item[data-list='${currentList}']`);
        selecedList.classList.add("selected");

        let moreList = makeElement(".more-list")
            (document.querySelector(".scroller-container"));

        moreList().textContent = "+";
        moreList().addEventListener("click", () => {
            appLogic().createList();
        });
    }

    function warning() {
        let warning = document.querySelector(".warning");
        warning.textContent = "";
        if (!document.querySelector("#title").value) {
            warning.textContent = "*You have to enter a Title!";
        } else warning.textContent = "*Due Date has to be later than Today!"
    }

    return {
        makeElement,
        addList,
        addTask,
        listScroller,
        warning,
        refreshAllTasks
    }
}

// Interfaces to connect the application logic to the DOM
(function DOMLoad() {
    const inputArea = document.querySelector("#input-area");

    interactDOM().makeElement("#reset", "input")(inputArea)
        ("type", "reset")("style", "visibility: hidden; position: absolute;");

    document.querySelector(".addTask").addEventListener("click", (e) => {
        appLogic().createTask();
        // document.querySelector("#reset").click(); 
        e.preventDefault();
    });

    // Add a default list: 

    interactDOM().refreshAllTasks();
})();



