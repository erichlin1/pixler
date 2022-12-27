// prevents unintended manipulation of the global object
'use strict';
// import scripts: color.js (class), random-color.js (random color generator)
import Color from './color.js';
import displayRandomColor from './random-color.js';

// listens to the window object for signal that DOM is fully constructed
window.addEventListener("DOMContentLoaded", () => {
        // gets canvas id
        const canvasElement = document.getElementById('canvas');
        // gets rendering context for  id `canvas`
        const rctx = canvasElement.getContext('2d');

        // enclosed variables for use in multiple callbacks
        const pixelDensity = 10;
        // let densityInput;
        let height;
        let width;

        document.getElementById('grid-input-field')
        .addEventListener('submit', (event) => {
            // prevents default behavior of the submitEvent which is submitting data to the server
            event.preventDefault();
            // user input width 
            width = document.getElementById('width-input').value;
            // user input height
            height = document.getElementById('height-input').value;        
            // sets canvas attribute: width and height
            setCanvas();
            // creates the canvas size
            createCanvas();
        })

        // use case: sets `height` and `width` of canvas background
        const setCanvas = () => {
            // gets canvas id
            const canvas = document.getElementById('canvas');
            // checks if user input is valid; edge case (0)
            if (height < 0 && width < 0) {
                // invokes  function to set innerText
                alertInvalidEntry();
                // sets canvas 0
                createCanvas(0, 0);
            } else {
                // set height attribute
                canvas.setAttribute('height', height);
                // set width attribute
                canvas.setAttribute('width', width);
            };
        };

        // use case: alerts user that their entry is invalid - valid [0, Infinity);
        const alertInvalidEntry = () => {
            const message = document.getElementById('alert-message');
            const invalidEntry = `Please enter a valid entry, startin from 0`;
            message.setAttribute('style','color:red');
            message.innerText = invalidEntry;
        };
        
        // use case: creates rec. canvas set by `height` and `width`
        const createCanvas = () => {
            rctx.fillStyle = 'white';
            rctx.strokeStyle = 'lightblue';
            rctx.fillRect(0, 0, width, height);
            //rctx.strokeRect(0, 0, width, height);
            mIterator();
        };

        // changes innerText to and assigns x-y coordinates 
        document.getElementById('canvas')
        .addEventListener('mousedown', (event) => {
            // canvas coordinates
            const offsetX = event.offsetX;
            const offsetY = event.offsetY;
            // gets id element 
            const canvasCoordinates = document.getElementById('canvas-coordinates');
            // gets id and sets innerText
            document.getElementById('canvas-coordinates').innerText = `x: ${offsetX} y: ${offsetY}`;
            // invoke to change color of pixel based on coordinates
            changePixelColor(offsetX, offsetY);
            
            
        });

        // changes color of each `pixel`
        const changePixelColor = (xCoordinate, yCoordinate) => {
            const fillColor = 'black'
            // defining fill style
            rctx.fillStyle = fillColor;
            // return and assign x-origin 
            const xOrigin = sIterator(xCoordinate, width);
            // return and assign y-origin 
            const yOrigin = sIterator(yCoordinate, height);
            // invokes fillRect method to change color based on x-y coordinates and predefined pixel density
            rctx.fillRect(xOrigin, yOrigin, pixelDensity, pixelDensity);
            // changes color back to white if user clicks on the same spot
 
        };

        /** helper functions */
        
        // for `createCanvas` function - creates grid by pixel density: 10
        const mIterator = () => {
            for (let row = 0; row < width; row += pixelDensity) {
                for (let col = 0; col < height; col += pixelDensity) {
                            rctx.strokeRect(row, col, pixelDensity, pixelDensity);
                        };
                    };
        };
        // for `changePixelColor` returns origin of click event
        const sIterator = (coordinate, stop) => {
            for (let origin = 0; origin <= stop; origin += pixelDensity) {
                const previous = coordinate >= origin;
                const next = coordinate <= origin + pixelDensity;
                if (previous && next) {
                    return origin;
                };
            };
        };
        
 });
    
