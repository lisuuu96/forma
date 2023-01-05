document.querySelector('button').onclick = function(){
    document.querySelector('#name').textContent = document.querySelector('#input-name').value;
    document.querySelector('#surname').textContent = document.querySelector('#lastname').value;
    document.querySelector('#phone').textContent = document.querySelector('#input-phone').value;
}

