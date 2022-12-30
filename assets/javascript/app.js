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