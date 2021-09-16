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

    const display = (parent, container) => {
        const task = document.createElement("div");
        const check = document.createElement("input");
        check.type = "checkbox";
        const text = document.createElement("p");
        text.textContent = info.title;
        const remove = document.createElement("button");
        remove.textContent = "X";

        remove.onclick = () => {
            parent.removeChild(task);
            for (let i = 0; i < container.length; i++) {
                if (container[i].getTitle() == info.title) {
                    container.splice(i, 1);
                }
            }
        }

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

    const removeTask = (title) => {
        for (let i = 0; i < info.tasks.length; i++) {
            if (info.tasks[i].title == title) {
                info.tasks.splice(i, 1);
            }
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
            task.display(parent, info.tasks);
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
        project.displayTasks(taskBox);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRWxDOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHNCQUFzQixpREFBTztBQUM3QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTztBQUNQLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SitCOztBQUUvQjs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDhDQUFJO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ047QUFDRTs7QUFFbEM7QUFDQSxZQUFZLGlEQUFPO0FBQ25CO0FBQ0EscURBQVk7QUFDWixrREFBUyxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0cnVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb2plY3R9IGZyb20gXCIuL3N0cnVjdHNcIjtcblxuY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3dQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIHByb2plY3RCb3guaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNyZWF0ZS50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlXCIpO1xuICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQoY3JlYXRlKTtcblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgcHJvamVjdC5kaXNwbGF5KHByb2plY3RCb3gpO1xuICAgIH0pXG5cbiAgICBjcmVhdGUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gcHJvbXB0KFwiRW50ZXIgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QocHJvamVjdHMsIHRpdGxlKSk7XG4gICAgICAgIHNob3dQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfVxufSIsImV4cG9ydCBsZXQgdGFzayA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBsZXQgaW5mbyA9IHt0aXRsZSxcbiAgICAgICAgICAgICAgICBkZXNjLFxuICAgICAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHl9O1xuICAgIFxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5mby50aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREZXNjID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5mby5kZXNjO1xuICAgIH1cblxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmZvLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmZvLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGluZm8udGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXREZXNjID0gKGRlc2MpID0+IHtcbiAgICAgICAgaW5mby5kZXNjID0gZGVzYztcbiAgICB9XG5cbiAgICBjb25zdCBzZXREdWVEYXRlID0gKGRhdGUpID0+IHtcbiAgICAgICAgaW5mby5kdWVEYXRlID0gZGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRQcmlvcml0eSA9IChwcmlvKSA9PiB7XG4gICAgICAgIGluZm8ucHJpb3JpdHkgPSBwcmlvO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXkgPSAocGFyZW50LCBjb250YWluZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlO1xuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmUudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICByZW1vdmUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh0YXNrKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcltpXS5nZXRUaXRsZSgpID09IGluZm8udGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XG4gICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG4gICAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlXCIpXG5cbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGFzayk7IFxuICAgIH1cblxuICAgIGNvbnN0IGhpZGUgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBnZXREZXNjLFxuICAgICAgICBnZXREdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIHNldERlc2MsXG4gICAgICAgIHNldER1ZURhdGUsXG4gICAgICAgIHNldFByaW9yaXR5LFxuICAgICAgICBkaXNwbGF5LFxuICAgICAgICBoaWRlXG4gICAgfTtcbn1cblxuZXhwb3J0IGxldCBwcm9qZWN0ID0gKGNvbnRhaW5lciwgdGl0bGUpID0+IHtcbiAgICBsZXQgaW5mbyA9IHtcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGFza3M6IFtdIFxuICAgIH07XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZm8udGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICAgICAgaW5mby50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICBpbmZvLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8udGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpbmZvLnRhc2tzW2ldLnRpdGxlID09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaW5mby50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gaW5mby50aXRsZTtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIHJlbW92ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaGlkZShwYXJlbnQsIHByb2plY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVcIilcblxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpOyBcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvLmNvbnRhaW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGluZm8uY29udGFpbmVyW2ldLmdldFRpdGxlKCkgPT0gaW5mby50aXRsZSkge1xuICAgICAgICAgICAgICAgIGluZm8uY29udGFpbmVyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUYXNrcyA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgaW5mby50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0YXNrLmRpc3BsYXkocGFyZW50LCBpbmZvLnRhc2tzKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIGRpc3BsYXksXG4gICAgICAgIGhpZGUsXG4gICAgICAgIGRpc3BsYXlUYXNrc1xuICAgIH1cbn1cbiIsImltcG9ydCB7dGFza30gZnJvbSBcIi4vc3RydWN0c1wiO1xuXG5jb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1Rhc2tzKHByb2plY3QpIHtcbiAgICB0YXNrQm94LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGUudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImNyZWF0ZVwiKTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKGNyZWF0ZSk7XG5cbiAgICBwcm9qZWN0LmRpc3BsYXlUYXNrcyh0YXNrQm94KTtcblxuICAgIGNyZWF0ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJHaXZlIGEgdGl0bGVcIik7XG4gICAgICAgIGxldCBkZXNjID0gcHJvbXB0KFwiR2l2ZSBhIGRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBsZXQgZHVlID0gcHJvbXB0KFwiR2l2ZSBhIGR1ZSBkYXRlXCIpO1xuICAgICAgICBsZXQgcHJpbyA9IHByb21wdChcIkdpdmUgYSBwcmlvcml0eVwiKTtcblxuICAgICAgICBsZXQgdDEgPSB0YXNrKHRpdGxlLCBkZXNjLCBkdWUsIHByaW8pO1xuICAgICAgICBwcm9qZWN0LmFkZFRhc2sodDEpO1xuICAgICAgICBwcm9qZWN0LmRpc3BsYXlUYXNrcyh0YXNrQm94KTtcblxuICAgICAgICBzaG93VGFza3MocHJvamVjdCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHNob3dUYXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9zdHJ1Y3RzXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgZGVmID0gcHJvamVjdChwcm9qZWN0cywgXCJEZWZhdWx0XCIpO1xucHJvamVjdHMucHVzaChkZWYpO1xuc2hvd1Byb2plY3RzKHByb2plY3RzKTtcbnNob3dUYXNrcyhkZWYpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==