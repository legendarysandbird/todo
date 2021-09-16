/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var _structs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structs */ "./src/structs.js");


const projectBox = document.getElementById("projects");

function showProjects(projects) {
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
        projects.push((0,_structs__WEBPACK_IMPORTED_MODULE_0__.project)(projects, title));
        showProjects(projects);
    }
}

/***/ }),

/***/ "./src/structs.js":
/*!************************!*\
  !*** ./src/structs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
let task = (title, desc, dueDate, priority) => {
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
        const check = document.createElement("input");
        check.type = "checkbox";
        const text = document.createElement("p");
        text.textContent = info.title;
        const remove = document.createElement("button");
        remove.textContent = "X";

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

let project = (container, title) => {
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
        info.tasks.push(task);
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

    const displayTasks = (parent) => {
        info.tasks.forEach((task) => {
            task.display(parent);
        })
    }

    return {
        getTitle,
        setTitle,
        addTask,
        removeTask,
        display,
        hide,
        displayTasks
    }
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showTasks)
/* harmony export */ });
/* harmony import */ var _structs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structs */ "./src/structs.js");


const taskBox = document.getElementById("tasks");

function showTasks(project) {
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

        let t1 = (0,_structs__WEBPACK_IMPORTED_MODULE_0__.task)(title, desc, due, prio);
        project.addTask(t1);
        t1.display(taskBox);

        showTasks(project);
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _structs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structs */ "./src/structs.js");




let projects = [];
const def = (0,_structs__WEBPACK_IMPORTED_MODULE_2__.project)(projects, "Default");
projects.push(def);
(0,_projects__WEBPACK_IMPORTED_MODULE_0__["default"])(projects);
(0,_tasks__WEBPACK_IMPORTED_MODULE_1__["default"])(def);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRWxDOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHNCQUFzQixpREFBTztBQUM3QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNQLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25KK0I7O0FBRS9COztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsOENBQUk7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDTjtBQUNFOztBQUVsQztBQUNBLFlBQVksaURBQU87QUFDbkI7QUFDQSxxREFBWTtBQUNaLGtEQUFTLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3RydWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvamVjdH0gZnJvbSBcIi4vc3RydWN0c1wiO1xuXG5jb25zdCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1Byb2plY3RzKHByb2plY3RzKSB7XG4gICAgcHJvamVjdEJveC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY3JlYXRlLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGVcIik7XG4gICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChjcmVhdGUpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICBwcm9qZWN0LmRpc3BsYXkocHJvamVjdEJveCk7XG4gICAgfSlcblxuICAgIGNyZWF0ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJFbnRlciBwcm9qZWN0IG5hbWVcIik7XG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdChwcm9qZWN0cywgdGl0bGUpKTtcbiAgICAgICAgc2hvd1Byb2plY3RzKHByb2plY3RzKTtcbiAgICB9XG59IiwiZXhwb3J0IGxldCB0YXNrID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBpbmZvID0ge3RpdGxlLFxuICAgICAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eX07XG4gICAgXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmZvLnRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERlc2MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmZvLmRlc2M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZm8uZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZm8ucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICAgICAgaW5mby50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERlc2MgPSAoZGVzYykgPT4ge1xuICAgICAgICBpbmZvLmRlc2MgPSBkZXNjO1xuICAgIH1cblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICBpbmZvLmR1ZURhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKHByaW8pID0+IHtcbiAgICAgICAgaW5mby5wcmlvcml0eSA9IHByaW87XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheSA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlO1xuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmUudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlXCIpXG5cbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7IFxuICAgIH1cblxuICAgIGNvbnN0IGhpZGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjLFxuICAgICAgICBnZXREdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldERlc2MsXG4gICAgICAgIHNldER1ZURhdGUsXG4gICAgICAgIHNldFByaW9yaXR5LFxuICAgICAgICBkaXNwbGF5LFxuICAgICAgICBoaWRlXG4gICAgfTtcbn1cblxuZXhwb3J0IGxldCBwcm9qZWN0ID0gKGNvbnRhaW5lciwgdGl0bGUpID0+IHtcbiAgICBsZXQgaW5mbyA9IHtcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGFza3M6IFtdIFxuICAgIH07XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZm8udGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICAgICAgaW5mby50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBpbmZvLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5mby50YXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgIGluZm8udGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXkgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlO1xuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmUudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgcmVtb3ZlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBoaWRlKHBhcmVudCwgcHJvamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKVxuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQocHJvamVjdCk7IFxuICAgIH1cblxuICAgIGNvbnN0IGhpZGUgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8uY29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5jb250YWluZXJbaV0uZ2V0VGl0bGUoKSA9PSBpbmZvLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaW5mby5jb250YWluZXIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheVRhc2tzID0gKHBhcmVudCkgPT4ge1xuICAgICAgICBpbmZvLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIHRhc2suZGlzcGxheShwYXJlbnQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgYWRkVGFzayxcbiAgICAgICAgcmVtb3ZlVGFzayxcbiAgICAgICAgZGlzcGxheSxcbiAgICAgICAgaGlkZSxcbiAgICAgICAgZGlzcGxheVRhc2tzXG4gICAgfVxufVxuIiwiaW1wb3J0IHt0YXNrfSBmcm9tIFwiLi9zdHJ1Y3RzXCI7XG5cbmNvbnN0IHRhc2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93VGFza3MocHJvamVjdCkge1xuICAgIHRhc2tCb3guaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlXCIpO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQoY3JlYXRlKTtcblxuICAgIHByb2plY3QuZGlzcGxheVRhc2tzKHRhc2tCb3gpO1xuXG4gICAgY3JlYXRlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IHByb21wdChcIkdpdmUgYSB0aXRsZVwiKTtcbiAgICAgICAgbGV0IGRlc2MgPSBwcm9tcHQoXCJHaXZlIGEgZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGxldCBkdWUgPSBwcm9tcHQoXCJHaXZlIGEgZHVlIGRhdGVcIik7XG4gICAgICAgIGxldCBwcmlvID0gcHJvbXB0KFwiR2l2ZSBhIHByaW9yaXR5XCIpO1xuXG4gICAgICAgIGxldCB0MSA9IHRhc2sodGl0bGUsIGRlc2MsIGR1ZSwgcHJpbyk7XG4gICAgICAgIHByb2plY3QuYWRkVGFzayh0MSk7XG4gICAgICAgIHQxLmRpc3BsYXkodGFza0JveCk7XG5cbiAgICAgICAgc2hvd1Rhc2tzKHByb2plY3QpO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzaG93UHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCBzaG93VGFza3MgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7cHJvamVjdH0gZnJvbSBcIi4vc3RydWN0c1wiO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmNvbnN0IGRlZiA9IHByb2plY3QocHJvamVjdHMsIFwiRGVmYXVsdFwiKTtcbnByb2plY3RzLnB1c2goZGVmKTtcbnNob3dQcm9qZWN0cyhwcm9qZWN0cyk7XG5zaG93VGFza3MoZGVmKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=