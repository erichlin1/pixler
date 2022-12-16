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
    // creates a blank imageData object
    const imageData = rctx().createImageData(100, 100);
    // used to achieve checker board style 
    let toggle = true;
    // pixel array data
    const pixel = imageData.data;
    // length of total pixels
    const pixelLen = imageData.data.length;
    // iterates over pixel data to create a checker board style image
    for (let i = 0; i < pixelLen; i += 4) {
        // CCO returns false while CCT returns true to achieve a toggle effect
        toggle = toggle ? canvasColorOne(i, pixel) : canvasColorTwo(i, pixel);
    };
    rctx().putImageData(imageData, 20, 20);
    

}

/*
const drawCanvas = (height, width) => {
    // creates a blank imageData object
    const imageData = rctx().createImageData(100, 100);
    // used to achieve checker board style 
    // Iterate through every pixel
    for (let i = 0; i < imageData.data.length; i += 4) {
        // Modify pixel data
        imageData.data[i + 0] = 190;  // R value
        imageData.data[i + 1] = 0;    // G value
        imageData.data[i + 2] = 210;  // B value
        imageData.data[i + 3] = 255;  // A value
    }

    // Draw image data to the canvas
    rctx().putImageData(imageData, 20, 20);
};
*/
    


const canvasColorOne = (i, pixel) => {
    // color #1
    const slate = new Color(122, 128, 144);
    pixel[i + 0] = slate.red;
    pixel[i + 1] = slate.green;
    pixel[i + 2] = slate.blue;
    pixel[i + 3] = slate.alpha;
    console.log(pixel);
    // returns false to toggle 
    return false;
}; 
/** chose not to implement a second iterative 0 -> 4 because of time and space complexity */

const canvasColorTwo = (i, pixel) => {
    // color #2
    const silver = new Color(192, 211, 192);
    pixel[i + 0] = silver.red;
    pixel[i + 1] = silver.green;
    pixel[i + 2] = silver.blue;
    pixel[i + 3] = silver.alpha;

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