// pixel class
export default class Pixel {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        /* 1 is fully opaque and 0 is transparent */
        this.alpha = 1;
    };
}