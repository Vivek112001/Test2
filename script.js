const grid = document.getElementById('grid');
const maxRedCount = 3;
const redQueue = []; 

for (let i = 0; i < 25; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.dataset.index = i;

    box.addEventListener('click', () => {
        if (box.classList.contains('red')) return; 

        if (redQueue.length >= maxRedCount) {
            const oldestBox = redQueue.shift();
            oldestBox.classList.remove('red');
        }

        box.classList.add('red');
        redQueue.push(box);
    });

    grid.appendChild(box);
}
