let count = 0;
const app = document.querySelector('div#app');

const main = document.createElement('main');
app.appendChild(main);

const titleH1 = document.createElement('h1');
titleH1.innerHTML = 'Counter App';
titleH1.id = 'title';
main.appendChild(titleH1);

const numberSpan = document.createElement('span');
numberSpan.innerHTML = count;
numberSpan.id = 'number';
main.appendChild(numberSpan);

const createButtons = () => {
    const buttonContainerDiv = document.createElement('div');
    buttonContainerDiv.className = 'container';
    main.appendChild(buttonContainerDiv);

    const increaseButton = document.createElement('button');
    increaseButton.innerHTML = '+';
    increaseButton.classList.add('button', 'button-increase');
    buttonContainerDiv.appendChild(increaseButton);

    const resetButton = document.createElement('button');
    resetButton.innerHTML = '0';
    resetButton.classList.add('button', 'button-reset');
    buttonContainerDiv.appendChild(resetButton);

    const decreaseButton = document.createElement('button');
    decreaseButton.innerHTML = '-';
    decreaseButton.classList.add('button', 'button-decrease');
    buttonContainerDiv.appendChild(decreaseButton);
}

createButtons();

const infoP = document.createElement('p');
infoP.innerHTML = 'Try pressing "+", "0", "r" or "-" on your keyboard. :)'
main.appendChild(infoP)

const updateCounter = action => {
    switch(action) {
        case 'increase':
            count++;
            numberSpan.innerHTML = count;
            break;
        case 'reset':
            count = 0;
            numberSpan.innerHTML = count;
            break;
        case 'decrease':
            count--;
            numberSpan.innerHTML = count;
    }

    switch(count) {
      case 69:
        numberSpan.innerHTML = "nice";
        break;
      case -69:
        numberSpan.innerHTML = "not nice";
        break;
    }
}

const increaseButton = document.querySelector('.button-increase');
const resetButton = document.querySelector('.button-reset');
const decreaseButton = document.querySelector('.button-decrease');

increaseButton.addEventListener('click', () => updateCounter('increase'));
resetButton.addEventListener('click', () => updateCounter('reset'));
decreaseButton.addEventListener('click', () => updateCounter('decrease'));

document.addEventListener('keydown', event => {
    switch(event.key) {
        case '+':
            updateCounter('increase');
            break;
        case '0':
        case 'r':
            updateCounter('reset');
            break;
        case '-':
            updateCounter('decrease');
            break;
        default:
            break;
    }
});
