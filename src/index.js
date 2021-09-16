import showProjects from "./projects";
import showTasks from "./tasks";
import {project} from "./structs";

let projects = [];
const def = project(projects, "Default");
projects.push(def);
showProjects(projects);
showTasks(def);