// VARIABLES                                     
const body = document.querySelector('body');
//* ------------- Section Input -----------------
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const modifBtn = document.getElementById('modifBtn');
const removeBtn = document.getElementById('removeBtn');
//* ------------- Section List ------------------
const listContainer = document.querySelector('.list-container ul');
let currentTask;
let currentLi;


// FUNCTIONS                                     
//* ---------------- addTask --------------------
const addTask = () => {
    const taskText = taskInput.value.trim();
    const li = document.createElement('li');
    li.innerHTML += 
        `<span class="checkbox">
            <img src="./assets/img/icons/svgs/round.svg" width="16" height="16" alt="checkbox" />
        </span>
        <p class="task">${taskText}</p>
        <span class="modify button">
            <img src="./assets/img/icons/svgs/modified.svg" width="16" height="16" alt="" />
        </span>`;
    listContainer.appendChild(li);
    taskInput.value = '';
    storeList();
};

//* --------------- checkTask -------------------
const checkTask = (currentLi, currentCheckbox) => {
    currentLi.classList.add('checked');
    currentCheckbox.innerHTML = currentLi.classList.contains('checked') 
        ? `<svg width="18" height="18" viewBox="0 0 120 120" fill="none" stroke="green" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 57.8651L55.172 77.7063L92.209 41" stroke="inherit" stroke-width="12" stroke-miterlimit="1.24432" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 60C6 89.8234 30.1766 114 60 114C89.8234 114 114 89.8234 114 60C114 30.1766 89.8234 6 60 6C30.1766 6 6 30.1766 6 60Z" stroke="inherit" stroke-width="12" stroke-miterlimit="1.24432" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`
        : `<img src="./assets/img/icons/svgs/round.svg" width="16" height="16" alt="checkbox" />`;
    storeList();
};

//* -------------- modifyTask -------------------
const modifyTask = (currentTask) => {
    const modifiedTask = taskInput.value;
    currentTask.innerHTML = `${modifiedTask}`;
    taskInput.value = '';
    storeList();
};

//* -------------- removeTask -------------------
const removeTask = (currentLi) => {
    currentLi.remove();
    taskInput.value = '';
    storeList();
};

//* --------------- storeList -------------------
const storeList = () => {
    window.localStorage.todolist = listContainer.innerHTML;
};

//* ---------------- getTodo --------------------
const getTodo = () => {
    if(window.localStorage.todolist) {
        listContainer.innerHTML = window.localStorage.todolist;
    }
};

// EVENT LISTENER                                
window.addEventListener('load', getTodo);

body.addEventListener('click', (e) => {

    //* -------- Click sur "➕" ----------------
    if(e.target.closest('#addBtn')) {
        addTask(e);
    };

    //* ------- Click sur "Task" ----------------
    if(e.target.closest('.task')) {
        const currentTask = e.target.closest('.task');
        const currentLi = currentTask.closest('li');
        const currentCheckbox = currentLi.querySelector('.checkbox');

        if(currentLi.classList.contains('checked')) {
            currentLi.remove();
            storeList();
        } else {
            checkTask(currentLi, currentCheckbox);
        };
    };

    //* ---- Click sur "✏️" (tâche) ------------

    if(e.target.closest('.modify')) {
        currentTask = e.target.closest('.modify').previousElementSibling;
        currentLi = e.target.closest('li');

        // On récupère le texte de la tâche pour l'intégrer dans l'input
        taskInput.value = `${currentTask.innerHTML}`;
        return (currentTask, currentLi);
    };
    
    //* --- Click sur "✏️" (général) -----------
    if(e.target.closest('#modifBtn')) {
        if(taskInput.value === '') {
            return
        } else {
            modifyTask(currentTask);
        }
    };

    //* -------- Click sur "🗑️" ----------------
    if(e.target.closest('#removeBtn')) {
        if(taskInput.value === '') {
            return
        } else {
            removeTask(currentLi);
        }
    };

});

