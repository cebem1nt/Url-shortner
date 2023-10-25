const output = document.querySelector('#output-text');
const input = document.querySelector('#input');
const clear = document.querySelector('.clear')
const shortIt = document.querySelector('.short')

output.addEventListener('keydown', (event)=>{
    event.preventDefault();
})

shortIt.addEventListener('click', ()=>{
    const URl = input.value
    const API = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(URl)}`;
     fetch(API)
      .then(response => response.text())
      .then(value => output.value = value)
})
clear.addEventListener('click', () => {
    input.value = ""
     output.value = ""
})