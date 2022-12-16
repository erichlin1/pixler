// * imports, libraries and modules */
import {Pixel} from '/.pixel.js';

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
    const slate = {'r': 122, 'g': 128, 'b': 144, 'a': 1};
    const silver = {'r': 192, 'g': 211, 'b': 192, 'a': 1};
    const imageData = rctx().createImageData(width, height);
    const pixelData = imageData.data;
    const pixelsDataLen = imageData.data.length;


};

document.getElementById('grid-input-field').addEventListener("submit", canvasSize)




/** NOTES:
 * 1. althougth in general HTML element do not have a property type value, <input> tag does.
 * 
 */