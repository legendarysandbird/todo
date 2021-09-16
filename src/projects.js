import {project} from "./structs";

const content = document.getElementById("content");

export default function showProjects(projects) {
    content.innerHTML = '';

    const create = document.createElement("button");
    create.textContent = "Add Project";
    content.appendChild(create);

    projects.forEach(project => {
       project.display(content);
    })

    create.onclick = () => {
        let title = prompt("Enter project name");
        projects.push(project(title));
        showProjects(projects);
    }
}