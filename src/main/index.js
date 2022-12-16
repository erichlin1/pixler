// * imports, libraries and modules */

class Color {
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        /* 1 is fully opaque and 0 is transparent */
        this.alpha = 1;
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
    canvasData(height, width);
    console.log(randomColorGenerator());
};

const setCanvasSize = (height, width) => {
    // canvas elements
    const canvas = document.getElementById('canvas');
    // set height attribute
    canvas.setAttribute('height', height);
    // set width attribute
    canvas.setAttribute('width', width);
}

const canvasData = (height, width) => {
    // creates a blank imageData object
    const imageData = rctx().createImageData(width, height);
    // return image data
    return imageData;
};

const drawCanvas = (imageData) => {
    let toggle = true;
    // pixel array data
    const pixel = imageData.data;
    // length of total pixels
    const pixelLen = imageData.data.length;
    // iterating over pixel data to create a checker board style image
    for (let i = 0; i < pixelLen; i += 4) {
        toggle = toggle ? canvasColorOne(i, imageData) : canvasColorTwo(i, imageData);
    };
}


const canvasColorOne = (i, imageData) => {
    // color #1

    const slate = new Color(122, 128, 144);
    imageData[i + 0] = slate.red;
    imageData[i + 1] = slate.green;
    imageData[i + 2] = slate.blue;
    imageData[i + 3] = slate.alpha;

    // returns false to toggle 
    return false;
}; 
/** chose not to implement a second iterative 0 -> 4 because of time and space complexity */

const canvasColorTwo = (i, imageData) => {
    // color #2

    const silver = new Color(192, 211, 192);
    imageData[i + 0] = silver.red;
    imageData[i + 1] = silver.green;
    imageData[i + 2] = silver.blue;
    imageData[i + 3] = silver.alpha;

    // returns false to toggle 
    return true;
};
/** chose not to implement a second iterative 0 -> 4 because of time and space complexity */




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
    // spreads colorSpace into comma separated values to instantiate a pixel object
    const color = new Color(...colorSpace);
    // return color
    return color;
};
/** NOTE: could simply pass 3 parameters of invoked randomFunctions during object instantiation */


/** displays the randomly generated color */
const displayRandomColor = () => {
    const color = randomColorGenerator();
    const colorStr = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    rctx().fillStyle = colorStr;
    rctx().fillRect(10, 10, 30, 20);
};




document.getElementById('grid-input-field').addEventListener("submit", canvasSize)
document.getElementById('random-color').addEventListener("click", displayRandomColor)



/** NOTES:
 * 1. althougth in general HTML element do not have a property type value, <input> tag does.
 * 
 */