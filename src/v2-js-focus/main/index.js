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
        // size of `pixel`
        // width
        const wp = Color.pixel().width;
        // heigt
        const hp = Color.pixel().height;

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

        // use case: sets `height` and `width` of canvas background
        const setCanvas = (height, width) => {
            // gets canvas id
            const canvas = document.getElementById('canvas');
            // checks if user input is valid; edge case (0)
            if (height < 0 && width < 0) {
                // invokes  function to set innerText
                alertInvalidEntry(height, width);
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
        const alertInvalidEntry = (height, width) => {
            const message = document.getElementById('alert-message');
            const invalidEntry = `Please enter a valid entry, startin from 0`;
            message.setAttribute('style','color:red');
            message.innerText = invalidEntry;
        };


        // use case: creates rec. canvas set by `height` and `width`
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
            rctx.fillRect(x, y, wp /* width of `pixel` */, hp /** height of `pixel` */);
        };


        // changes innerText to and assigns x-y coordinates 
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
            console.log(boundingClientRect, event);
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