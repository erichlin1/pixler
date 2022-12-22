export default class Color {
    constructor(red, green, blue, alpha, width, height) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        /* 1 is fully opaque and 0 is transparent */
        this.alpha = 1;
        this.width = 10;
        this.height = 10;
    };
}