import {task, project} from "./structs.js";

t1 = task("hello", "desc", "12/2", 1);
p1 = project("Default");

p1.addTask(t1);