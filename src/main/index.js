import Color from './color.js';
import displayRandomColor from './random-color.js';

window.addEventListener("DOMContentLoaded", () => {

        const canvasElement = document.getElementById('canvas');
        const rctx = canvasElement.getContext('2d');       
        const pixelWidth = 10;
        const pixelHeight = 10;

        const canvas = (event) => {
            // prevents default behavior of the submitEvent which is submitting data to the server
            event.preventDefault();

            // user input width 
            const width = document.getElementById('width-input').value;
            // user input height
            const height = document.getElementById('height-input').value;
            // sets canvas size
            setCanvas(height, width);
            // creates a canvas size
            createCanvas(height, width);
            // gets coordinates of canvas 
        };

        const setCanvas = (height, width) => {
            // canvas elements
            const canvas = document.getElementById('canvas');
            // set height attribute
            canvas.setAttribute('height', height);
            // set width attribute
            canvas.setAttribute('width', width);
        }

        const createCanvas = (height, width) => {
            rctx.fillStyle = 'white';
            rctx.strokeStyle = 'grey';
            rctx.fillRect(0, 0, width, height);
            //rctx.strokeRect(0, 0, width, height);
            for (let row = 0; row < width; row += 10) {
                for (let col = 0; col < height; col += 10) {
                    rctx.strokeRect(row, col, 10, 10);
                };
            };
            
        };
        
        const changeColor = (x, y) => {
            // defining fill style
            rctx.fillStyle = 'black';
            rctx.fillRect(x, y, pixelWidth, pixelHeight);
        };


        /** changes innerText to and assigns x-y coordinates */
        const coordinates = (event) => {
            const currCoordinates = {};
            const canvasCoordinates = document.getElementById('canvas-coordinates');
            const boundingClientRect = canvasCoordinates.getBoundingClientRect();
            const boundingX = boundingClientRect.left;
            const boundingY = boundingClientRect.top;
            const clientX = event.clientX;
            const clientY = event.clientY;
            const x = clientX - boundingX;
            const y = clientY - boundingY;
            currCoordinates['x'] = x;
            currCoordinates['y'] = y;
            document.getElementById('canvas-coordinates').innerText = `x: ${currCoordinates.x} y: ${currCoordinates.y}`;
            // invoke to change color of pixel based on coordinates
            changeColor(currCoordinates.x, currCoordinates.y);
        }; 





        document.getElementById('grid-input-field').addEventListener('submit', canvas);
        document.getElementById('canvas').addEventListener('mousedown', coordinates)
});


/** GENERAL NOTES:
 * 1. althougth in general HTML element do not have a property type value, <input> tag does.
 * 
 */