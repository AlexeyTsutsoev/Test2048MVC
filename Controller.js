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
        console.log(`reset`)
        this.isGameLose = false;
        this.isGameWon = false;
        this.model.createField();
    }

    restart() {
        if (this.isGameLose) {
            let lose = confirm('Вы проиграли. Сыграть ещё?');
            if (lose) {
                this.resetGame();
            }
        }
        if (this.isGameWon) {
            let win = confirm('Вы Выиграли! Сыграть ещё?');
            if (win) {
                this.resetGame();
            }
        }
        this.view.render();
    }

    control(event) {
        if (event.keyCode === 27) this.resetGame();
        if (!this.model.canMove()) {
            console.log('нельзя двигаться')
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