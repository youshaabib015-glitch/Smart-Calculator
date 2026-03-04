let display = document.getElementById('result');
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch(e) {
                display.value = 'Error';
            }
        }else if(button.textContent === 'AC') {
            display.value = '';
        }else if(button.textContent === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if(button.textContent === '%') {
            try {
                display.value = eval(display.value) / 100;
            }catch(e) {
                display.value = 'Error';
            }
        }else {
            display.value += button.textContent;
        }
    })});