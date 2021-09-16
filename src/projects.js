import {project} from "./structs";

const projectBox = document.getElementById("projects");

export default function showProjects(projects) {
    projectBox.innerHTML = '';

    const create = document.createElement("button");
    create.textContent = "+";
    create.classList.add("create");
    projectBox.appendChild(create);

    projects.forEach(project => {
       project.display(projectBox);
    })

    create.onclick = () => {
        let title = prompt("Enter project name");
        projects.push(project(projects, title));
        showProjects(projects);
    }
}