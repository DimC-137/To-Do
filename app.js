const priorityData = [
    {value: 1, label: 'Urgent!'},
    {value: 2, label: 'Normal'},
    {value: 3, label: 'Fugetaboutit'}
];

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const init = _ => {

    const addTaskButton = document.querySelector('[data-add-task]');
    addTaskButton.addEventListener('click', addTask);
    renderPrioritySelector(priorityData);

    renderAddTask();
    
};

const renderPrioritySelector = selectorData => {

    let html = '';
    const selector = document.querySelector('[data-task-priority-selector]');
    selectorData.forEach(option => {
        html += `<option data-task-priority value ="${option.value}">${option.label}</option>`;
    });

    selector.innerHTML = html;
};




const addTask = _ => {

    const inputText = document.querySelector('[data-input-text]');
    const inputPriority = document.querySelector('[data-task-priority-selector]');
    const id = getRandomIntInclusive(10000000, 99999999);
    
    const task = {
        id: id,
        task: inputText.value,
        priority: parseInt(inputPriority.value), 
        done: false
    }

    inputText.value = '';
    inputPriority.value = 1;

    TASKS.unshift(task);

    renderAddTask();
    
};

const renderAddTask = _ => {

    let html = '';
    

    TASKS.forEach(t => {
        const {id, task, priority, done} = t;

        let li = `<li data-id="${id}" class="tasklistli">
                        <div data-task-view-priority="${priority}" class="box" >
                            <button class="done" ${done ? 'disabled' : 'enabled'} data-task-button-done>Done</button>
                            <div class="task" data-task-text>${task}</div>
                            <button class="save" data-task-button-save>Save</button>
                            <button class="delete" data-task-button-delete>Delete</button>
                        </div>
                    </li>`;

        html += li;
    });
    
    const taskList = document.querySelector('[data-task-list]');
    taskList.innerHTML = html;
    
};

let TASKS = [];

init();