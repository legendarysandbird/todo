export let task = (title, desc, dueDate, priority) => {
    let info = {title,
                desc,
                dueDate,
                priority};
    
    const getTitle = () => {
        return info.title;
    }

    const getDesc = () => {
        return info.desc;
    }

    const getDueDate = () => {
        return info.dueDate;
    }

    const getPriority = () => {
        return info.priority;
    }

    const setTitle = (title) => {
        info.title = title;
    }

    const setDesc = (desc) => {
        info.desc = desc;
    }

    const setDueDate = (date) => {
        info.dueDate = date;
    }

    const setPriority = (prio) => {
        info.priority = prio;
    }

    const display = (parent) => {
        const task = document.createElement("div");
        const check = document.createElement("button");
        const text = document.createElement("p");
        text.textContent = info.title;
        const remove = document.createElement("button");

        task.classList.add("task");
        check.classList.add("check");
        text.classList.add("text");
        remove.classList.add("remove")

        task.appendChild(check);
        task.appendChild(text);
        task.appendChild(remove);

        parent.appendChild(task); 
    }

    const hide = (element) => {
        element.remove();
    }

    return {
        getTitle,
        getDesc,
        getDueDate,
        getPriority,
        setTitle,
        setDesc,
        setDueDate,
        setPriority,
        display,
        hide
    };
}

export let project = (container, title) => {
    let info = {
        container,
        title,
        tasks: [] 
    };

    const getTitle = () => {
        return info.title;
    }

    const setTitle = (title) => {
        info.title = title;
    }

    const addTask = (task) => {
        info.tasks.push(item);
    }

    const removeTask = (task) => {
        const index = info.tasks.indexOf(task);
        if (index != -1) {
            info.tasks.splice(index, 1);
        }
    }

    const display = (parent) => {
        const project = document.createElement("div");
        const text = document.createElement("p");
        text.textContent = info.title;
        const remove = document.createElement("button");
        remove.textContent = "X";
        remove.onclick = () => {
            hide(parent, project);
        }

        project.classList.add("project");
        text.classList.add("text");
        remove.classList.add("remove")

        project.appendChild(text);
        project.appendChild(remove);

        parent.appendChild(project); 
    }

    const hide = (parent, child) => {
        parent.removeChild(child);
        for (let i = 0; i < info.container.length; i++) {
            if (info.container[i].getTitle() == info.title) {
                info.container.splice(i, 1);
            }
        }
    }

    return {
        getTitle,
        setTitle,
        addTask,
        removeTask,
        display,
        hide
    }
}
