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
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


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

        project.onclick = () => {
            (0,_tasks__WEBPACK_IMPORTED_MODULE_0__.showTasks)()
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRWxDOztBQUVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHNCQUFzQixpREFBTztBQUM3QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmtDOztBQUUzQjtBQUNQLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxpREFBUztBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbksrQjs7QUFFL0I7O0FBRWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw4Q0FBSTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNOO0FBQ0U7O0FBRWxDO0FBQ0EsWUFBWSxpREFBTztBQUNuQjtBQUNBLHFEQUFZO0FBQ1osa0RBQVMsTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHJ1Y3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9zdHJ1Y3RzXCI7XG5cbmNvbnN0IHByb2plY3RCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBwcm9qZWN0Qm94LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGUudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImNyZWF0ZVwiKTtcbiAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKGNyZWF0ZSk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgIHByb2plY3QuZGlzcGxheShwcm9qZWN0Qm94KTtcbiAgICB9KVxuXG4gICAgY3JlYXRlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0aXRsZSA9IHByb21wdChcIkVudGVyIHByb2plY3QgbmFtZVwiKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KHByb2plY3RzLCB0aXRsZSkpO1xuICAgICAgICBzaG93UHJvamVjdHMocHJvamVjdHMpO1xuICAgIH1cbn0iLCJpbXBvcnQge3Nob3dUYXNrc30gZnJvbSBcIi4vdGFza3NcIjtcblxuZXhwb3J0IGxldCB0YXNrID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIGxldCBpbmZvID0ge3RpdGxlLFxuICAgICAgICAgICAgICAgIGRlc2MsXG4gICAgICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eX07XG4gICAgXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmZvLnRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERlc2MgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpbmZvLmRlc2M7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZm8uZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGluZm8ucHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICAgICAgaW5mby50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldERlc2MgPSAoZGVzYykgPT4ge1xuICAgICAgICBpbmZvLmRlc2MgPSBkZXNjO1xuICAgIH1cblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICBpbmZvLmR1ZURhdGUgPSBkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKHByaW8pID0+IHtcbiAgICAgICAgaW5mby5wcmlvcml0eSA9IHByaW87XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheSA9IChwYXJlbnQsIGNvbnRhaW5lcikgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGluZm8udGl0bGU7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHJlbW92ZS50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgICAgIHJlbW92ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHRhc2spO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyW2ldLmdldFRpdGxlKCkgPT0gaW5mby50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcbiAgICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcbiAgICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVcIilcblxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZCh0YXNrKTsgXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZSA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIGdldERlc2MsXG4gICAgICAgIGdldER1ZURhdGUsXG4gICAgICAgIGdldFByaW9yaXR5LFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgc2V0RGVzYyxcbiAgICAgICAgc2V0RHVlRGF0ZSxcbiAgICAgICAgc2V0UHJpb3JpdHksXG4gICAgICAgIGRpc3BsYXksXG4gICAgICAgIGhpZGVcbiAgICB9O1xufVxuXG5leHBvcnQgbGV0IHByb2plY3QgPSAoY29udGFpbmVyLCB0aXRsZSkgPT4ge1xuICAgIGxldCBpbmZvID0ge1xuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0YXNrczogW10gXG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5mby50aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBpbmZvLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGluZm8udGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGluZm8udGFza3NbaV0udGl0bGUgPT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICBpbmZvLnRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXkgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlO1xuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICByZW1vdmUudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgcmVtb3ZlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBoaWRlKHBhcmVudCwgcHJvamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICAgICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZVwiKVxuXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgICBwcm9qZWN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzaG93VGFza3MoKVxuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHByb2plY3QpOyBcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvLmNvbnRhaW5lci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGluZm8uY29udGFpbmVyW2ldLmdldFRpdGxlKCkgPT0gaW5mby50aXRsZSkge1xuICAgICAgICAgICAgICAgIGluZm8uY29udGFpbmVyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlUYXNrcyA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgaW5mby50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICB0YXNrLmRpc3BsYXkocGFyZW50LCBpbmZvLnRhc2tzKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIGFkZFRhc2ssXG4gICAgICAgIHJlbW92ZVRhc2ssXG4gICAgICAgIGRpc3BsYXksXG4gICAgICAgIGhpZGUsXG4gICAgICAgIGRpc3BsYXlUYXNrc1xuICAgIH1cbn1cbiIsImltcG9ydCB7dGFza30gZnJvbSBcIi4vc3RydWN0c1wiO1xuXG5jb25zdCB0YXNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hvd1Rhc2tzKHByb2plY3QpIHtcbiAgICB0YXNrQm94LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGUudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImNyZWF0ZVwiKTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKGNyZWF0ZSk7XG5cbiAgICBwcm9qZWN0LmRpc3BsYXlUYXNrcyh0YXNrQm94KTtcblxuICAgIGNyZWF0ZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSBwcm9tcHQoXCJHaXZlIGEgdGl0bGVcIik7XG4gICAgICAgIGxldCBkZXNjID0gcHJvbXB0KFwiR2l2ZSBhIGRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBsZXQgZHVlID0gcHJvbXB0KFwiR2l2ZSBhIGR1ZSBkYXRlXCIpO1xuICAgICAgICBsZXQgcHJpbyA9IHByb21wdChcIkdpdmUgYSBwcmlvcml0eVwiKTtcblxuICAgICAgICBsZXQgdDEgPSB0YXNrKHRpdGxlLCBkZXNjLCBkdWUsIHByaW8pO1xuICAgICAgICBwcm9qZWN0LmFkZFRhc2sodDEpO1xuICAgICAgICBwcm9qZWN0LmRpc3BsYXlUYXNrcyh0YXNrQm94KTtcblxuICAgICAgICBzaG93VGFza3MocHJvamVjdCk7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNob3dQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHNob3dUYXNrcyBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHtwcm9qZWN0fSBmcm9tIFwiLi9zdHJ1Y3RzXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuY29uc3QgZGVmID0gcHJvamVjdChwcm9qZWN0cywgXCJEZWZhdWx0XCIpO1xucHJvamVjdHMucHVzaChkZWYpO1xuc2hvd1Byb2plY3RzKHByb2plY3RzKTtcbnNob3dUYXNrcyhkZWYpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==