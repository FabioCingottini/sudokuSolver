`use strict`;

module.exports = class {

    constructor(value, x, y) {
        this.setValue(value);
        this.x = x;
        this.y = y;
        this.square = {
            x: Math.ceil(x / 3),
            y: Math.ceil(y / 3)
        };
    }
    /*
    set value() {
        this.value = value;
    }
    */

    getValue(value) {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }
};