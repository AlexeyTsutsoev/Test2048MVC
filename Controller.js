import View from './View.js'


export default class Controller {
    constructor(model) {
        this.model = model;
        this.view = new View(this);
        this.isGameLose = false;
        this.isGameWon = false;
        this.WinningTile = 2048;
    }

    resetGame() {
        this.model.score = 0;
        view.isGameLose = false;
        view.isGameWon = false;
        this.model.createField();
    }

    control(event) {
        if (event.KeyCode === 27) this.resetGame();
        if (!this.model.canMove()) {
            this.isGameLose = true;
        } else {
            if (!this.isGameLose && !this.isGameWon) {
                switch (event.keyCode) {
                    case 37:
                        this.model.moveLeft();
                        break;
                    case 38:
                        this.model.moveUp();
                        break;
                    case 39:
                        this.model.moveRight();
                        break;
                    case 40:
                        this.model.moveDown();
                        break;
                }
                if (this.model.maxTile === this.WinningTile) this.isGameWon = true;
            }
        }
        this.view.render();
    }
}