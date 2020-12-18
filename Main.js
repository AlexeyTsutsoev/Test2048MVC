import Model from './Model.js'
import Controller from './Controller.js'

let model = new Model();
let controller = new Controller(model);
controller.view.render();
let body = document.getElementById('body');
body.addEventListener('keydown', (event) => {
    controller.control(event);
    controller.restart();
});


//не работает
/*onst promise = new Promise((resolve, reject) => {
    if (controller.isGameWon) {
        resolve('Вы выиграли! Сыграть ещё?');
    }
    if (controller.isGameLose) {
        reject('Вы проиграли. Сыграть ещё?');
    }
});

promise.then((data) => {
        const message = prompt(data);
        if (message) {
            controller.resetGame;
        }
    })
    .catch((data) => {
        const message = prompt(data);
        if (message) {
            controller.resetGame;
        }
    });*/