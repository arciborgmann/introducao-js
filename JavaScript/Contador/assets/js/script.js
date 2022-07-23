var currentNumberWrapper = document.getElementById('currentNumber'),
    currentNumber = 0,
    elemSubtrair = document.getElementById('subtrair'),
    elemAdicionar = document.getElementById('adicionar');

elemSubtrair.disabled = true;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 10) {
        elemAdicionar.disabled = true;
    }
    if (currentNumber > 0) {
        elemSubtrair.disabled = false;
    }
    /* if (currentNumber == 0) {
        currentNumberWrapper.style.color = 'black';
    } */
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 10) {
        elemAdicionar.disabled = false;
    }
    if (currentNumber <= 0) {
        elemSubtrair.disabled = true;
        //currentNumberWrapper.style.color = 'red';
    }
}

elemAdicionar.addEventListener('click', increment);
elemSubtrair.addEventListener('click', decrement);