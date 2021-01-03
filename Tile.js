export default class Tile {
    constructor(value) {
        this.value = value;
    }

    setValue(newValue) {
        this.value = newValue;
    }

    getValue() {
        return this.value;
    }

    getColor() {
        switch (this.value) {
            case 0:
                return 'lightgray';
            case 2:
                return 'lightyellow';
            case 4:
                return 'lightgreen';
            case 8:
                return 'lightsalmon';
            case 16:
                return 'orange';
            case 32:
                return 'Tomato';
            case 64:
                return 'red';
            case 128:
                return 'yellow';
            case 256:
                return 'YellowGreen';
            case 512:
                return 'DarkOrange';
            case 1024:
                return 'OrangeRed';
            case 2048:
                return 'DarkRed';
        }
    }
}