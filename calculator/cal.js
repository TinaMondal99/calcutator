const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.foreach((item) => {
    item.onclick = () => {
        if (item.id = 'clear') {
            display.innertext = '';
        } else if (item.id == 'backspace') {
            let string = display.innertext.toString();
            display.innertext = string.substr(0, string.length - 1);

        } else if (display.innertext != ' ' && item.id == 'equal') {
            display.innertext = eval(display.innertext);
        } else if (display.innertext == '' && item.id == 'equal') {
            display.innertext = 'Empty';
            setTimeout(() => (display.innertext = ''), 2000);
        } else {
            display.innertext += item.id;
        }
    }
})
const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggler = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}