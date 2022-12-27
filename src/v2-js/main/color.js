export default class Color {
    // constructor method (all defined parameters will be properties of every instance)
    constructor(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        /* 1 is  opaque and 0 is transparent */
        this.alpha = 1;
    };
};
