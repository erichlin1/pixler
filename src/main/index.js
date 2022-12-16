// * imports, libraries and modules */

class Color {
    constructor(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        /* 1 is fully opaque and 0 is transparent */
        this.alpha = alpha;
    };
}
// rendering context
const rctx = () => {
    const canvasElement = document.getElementById('canvas');
    const rctx = canvasElement.getContext('2d');
    return rctx;
}


const fillCanvas = (width, height) => {
    // setting color
    rctx().fillStyle = "black";
    // filling rectangle with color
    rctx().fillRect(1, 1, width, height);

}

const canvasSize = (event) => {
    // prevents default behavior of the submitEvent which is submitting data to the server
    event.preventDefault();
    // user input width 
    const width = document.getElementById('width-input').value;
    // user input height
    const height = document.getElementById('height-input').value;
    // sets attribute
    setCanvasSize(height, width);
    drawCanvas(height, width);
    randomColorGenerator();
};

const setCanvasSize = (height, width) => {
    // canvas elements
    const canvas = document.getElementById('canvas');
    // set height attribute
    canvas.setAttribute('height', height);
    // set width attribute
    canvas.setAttribute('width', width);
}


const drawCanvas = (height, width) => {
    // color #1
    const silver = new Color(190, 200, 210, 255);
    // color #2
    const slate = new Color(30, 0, 210, 255);
    // creates a blank imageData object
    const imageData = rctx().createImageData(height, width);
    // used to achieve checker board style 
    let toggle = true;
    // pixel array data
    const pixel = imageData.data;
    // length of total pixels
    const pixelLen = imageData.data.length;
    // creates an array of objects
    const canvas = createCanvas(pixel, pixelLen, width);
    console.log(canvas, pixel);
    for (let i = 0; i < canvas.length; i += 1) {
        let currColor = canvas[i];
        i % width ? createColor(currColor, slate) : createColor(currColor, silver);
    }
    console.log(pixel);
    rctx().putImageData(canvas, 20, 20);

};


    
const createCanvas = (pixel, pixelLen, width) => {
    let colors = [];
    let temp = [];
    for (let i = 0; i < pixelLen; i += 4) {
        for (let j = 0; j < 4; j += 1) {
            let data = pixel[i + j];
            temp.push(data);
        };
        colors.push(new Color(...temp));
    };
    /** returns object of color pixel data */
    return colors;
}

const createColor = (currColor, baColor) => {
    currColor.red = baColor.red;
    currColor.green = baColor.green;
    currColor.blue = baColor.blue;
    currColor.alpha = baColor.alpha;
};




/** randomly generates a number between 0-255 */
const randomFunction = () => {
    return Math.ceil(Math.random() * (255 - 0) + 0); 
};

/** randomly generates a color */
const randomColorGenerator = () => {
    // creates an array of undefined ele through Array object constructor and filling each index with null
    let colorSpace = Array(3).fill(null);
    // iterates colorSpace and replaces each value with a randomly generated number between 0-255    
    colorSpace.forEach((data, index, space) => {
        // reassigns each value with a random number
        space[index] = randomFunction();
    });
    // spreads colorSpace into comma separated values to instantiate pixel object
    const color = new Color(...colorSpace);
    // return color
    return color;
};
/** could simply pass 3 parameters of invoked randomFunctions during object instantiation */


/** displays the randomly generated color */
const displayRandomColor = () => {
    const color = randomColorGenerator();
    const colorStr = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    rctx().fillStyle = colorStr;
    rctx().fillRect(10, 10, 30, 20);
};




document.getElementById('grid-input-field').addEventListener("submit", canvasSize)
document.getElementById('random-color').addEventListener("click", displayRandomColor)



/** GENERAL NOTES:
 * 1. althougth in general HTML element do not have a property type value, <input> tag does.
 * 
 */