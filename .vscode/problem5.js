const block = document.getElementById('block');
const controlButton = document.getElementById('controlButton');
let isMoving = false;


controlButton.addEventListener('click', function() {

    if (!isMoving) {
        block.style.transform = 'translateX(100vw)';
    } else {
        block.style.transform = 'translateX(0)';
    }

    isMoving = !isMoving;
});
