//  constants
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let number = document.getElementById('number');
let init = 0;

// Implement Code Action
increment.addEventListener('click', () => {
    init += 1;
    number.innerHTML = init;
});

decrement.addEventListener('click', () => {
    if (init > 0) {
        init -= 1;
        number.innerHTML = init;
    } else {
        return init;
    }
});