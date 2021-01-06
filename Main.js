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
