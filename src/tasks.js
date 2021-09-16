import {task} from "./structs";

const taskBox = document.getElementById("tasks");

export default function showTasks(project) {
    taskBox.innerHTML = '';

    const create = document.createElement("button");
    create.textContent = "+";
    create.classList.add("create");
    taskBox.appendChild(create);

    project.displayTasks(taskBox);

    create.onclick = () => {
        let title = prompt("Give a title");
        let desc = prompt("Give a description");
        let due = prompt("Give a due date");
        let prio = prompt("Give a priority");

        let t1 = task(title, desc, due, prio);
        project.addTask(t1);
        project.displayTasks(taskBox);

        showTasks(project);
    }
}