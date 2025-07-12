const grid = document.getElementById('grid');
const maxRedBoxes = []; 

for (let i = 0; i < 25; i++) {
    const box = document.createElement('div');
    box.classList.add('box');

    box.addEventListener('click', () => {
        if (box.classList.contains('red')) return; 

        if (maxRedBoxes.length >= 3) {
            const oldestBox = maxRedBoxes.shift();
            oldestBox.classList.remove('red');
        }

        box.classList.add('red');
        maxRedBoxes.push(box);
    });

    grid.appendChild(box);
}
