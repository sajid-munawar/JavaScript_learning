const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
    console.log();
    if (e.target.tagName == 'SPAN') {
        
        e.target.parentElement.remove();
    }
})