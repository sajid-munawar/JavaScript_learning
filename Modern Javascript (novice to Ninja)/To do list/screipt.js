const ul = document.querySelector('ul');
const form = document.querySelector('form');

ul.addEventListener('click', (e) => {
    console.log();
    if (e.target.tagName == 'SPAN') {
        
        e.target.parentElement.remove();
    }
})

// localStorage.setItem(ul)

function generateTodo(todo) {
    const html = `<li>${todo} <span>button</span></li>`;
    ul.innerHTML+=html
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const todo = form.add.value;
    generateTodo(todo)
    localStorage.setItem('ul',JSON.stringify(ul.innerHTML));
    form.reset()
})