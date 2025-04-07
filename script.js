let addButton = document.querySelector('.add');

let inputText = document.querySelector('.input');

let tasks = document.querySelector('.tasks');

inputText.addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        addButton.click()
    }
})

addButton.addEventListener('click', function(e) {
    if (inputText.value.trim() == "") {

    } else {
        let addedTask = document.createElement('div');
        addedTask.classList.add('addedTask');

        let theTask = document.createElement('span');
        theTask.append(inputText.value);

        let deleteButton = document.createElement('button');
        deleteButton.append('Delete');
        deleteButton.classList.add('delete');

        
        addedTask.append(theTask, deleteButton);
        tasks.append(addedTask);

        inputText.value = "";

        localStorage.setItem('content', tasks.innerHTML);
    }
    
})


document.addEventListener('click', function(e) {
    if (e.target.getAttribute('class') == 'delete') {
        e.target.parentElement.remove();
        localStorage.setItem('content', tasks.innerHTML);
    }
})


window.addEventListener('load', function(e) {
    if (this.localStorage.content) {
        tasks.innerHTML = this.localStorage.content;
    }
})