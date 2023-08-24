const addOnePoolButton = document.getElementById('addOnePoolButton');
const addTwoPoolButton = document.getElementById('addTwoPoolButton');
const resetButton = document.getElementById('resetButton');
const counterText = document.querySelector('[data-find="counterValue"]');

const COUNTER_INITIAL_VALUE = 0;
let counter = COUNTER_INITIAL_VALUE;
counterText.innerText = counter;



addOnePoolButton.addEventListener('click', function() {
    counter = counter + parseInt(addOnePoolButton.dataset.pools);

    counterText.innerText = counter;
});

addTwoPoolButton.addEventListener('click', function() {
    counter = counter + parseInt(addTwoPoolButton.dataset.pools);

    counterText.innerText = counter;
});



resetButton.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;

    counterText.innerText = counter;
});



