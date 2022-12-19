/** import { doc } from "../../../../notes/main/notes"; */

// * imports, libraries and modules */
class Color {
    constructor(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        /* 1 is fully opaque and 0 is transparent */
        this.alpha = 1;
    };
}


window.addEventListener("DOMContentLoaded", () => {
        const canvasElement = document.getElementById('canvas');

        // rendering context
        const rctx = (() => {
            const rctx = canvasElement.getContext('2d');
            return {'htmlElement': canvasElement, 'renderingContext': rctx};
        })();

        const canvasSize = (event) => {
            // prevents default behavior of the submitEvent which is submitting data to the server
            event.preventDefault();
            // user input width 
            const width = document.getElementById('width-input').value;
            // user input height
            const height = document.getElementById('height-input').value;
            // creates a rec
            createRec(height, width);
        };

        const setCanvasSize = (height, width) => {
            // canvas elements
            const canvas = document.getElementById('canvas');
            // set height attribute
            canvas.setAttribute('height', height);
            // set width attribute
            canvas.setAttribute('width', width);
        }

        const createRec = (height, width) => {
            /* suppose height is 100 and width is 100 */
            //rctx.renderingContext.fillRect(0, 0, width, height);
            //rctx.renderingContext.fillStyle = randomColorGenerator();
            rctx.renderingContext.rect(0,0, width, height);
            rctx.renderingContext.rect(width, 0, width, height);
            rctx.renderingContext.rect(width * 2, 0, width, height);
            rctx.renderingContext.rect(width * 3, 0, width, height);
            rctx.renderingContext.rect(width * 4, 0, width, height);
            rctx.renderingContext.rect(width * 5, 0, width, height);
            rctx.renderingContext.rect(0, height, width, height);
            rctx.renderingContext.rect(0, height * 2, width, height);
            rctx.renderingContext.rect(0, height * 3, width, height);
            rctx.renderingContext.rect(0, height * 4, width, height);
            rctx.renderingContext.rect(0, height * 5, width, height);

            rctx.renderingContext.rect(width, height, width, height);
            rctx.renderingContext.rect(width * 2, height, width, height);
            rctx.renderingContext.rect(width * 3, height, width, height);
            rctx.renderingContext.rect(width * 4, height, width, height);
            rctx.renderingContext.rect(width * 5, height, width, height);

            rctx.renderingContext.rect(width, height * 2, width, height);
            rctx.renderingContext.rect(width * 2, height * 2, width, height);
            rctx.renderingContext.rect(width * 3, height * 2, width, height);
            rctx.renderingContext.rect(width * 4, height * 2, width, height);
            rctx.renderingContext.rect(width * 5, height * 2, width, height);

            rctx.renderingContext.rect(width, height * 3, width, height);
            rctx.renderingContext.rect(width * 2, height * 3, width, height);
            rctx.renderingContext.rect(width * 3, height * 3, width, height);
            rctx.renderingContext.rect(width * 4, height * 3, width, height);
            rctx.renderingContext.rect(width * 5, height * 3, width, height);

            rctx.renderingContext.rect(width, height * 4, width, height);
            rctx.renderingContext.rect(width * 2, height * 4, width, height);
            rctx.renderingContext.rect(width * 3, height * 4, width, height);
            rctx.renderingContext.rect(width * 4, height * 4, width, height);
            rctx.renderingContext.rect(width * 5, height * 4, width, height);

            rctx.renderingContext.rect(width, height * 5, width, height);
            rctx.renderingContext.rect(width * 2, height * 5, width, height);
            rctx.renderingContext.rect(width * 3, height * 5, width, height);
            rctx.renderingContext.rect(width * 4, height * 5, width, height);
            rctx.renderingContext.rect(width * 5, height * 5, width, height);


            

            rctx.renderingContext.stroke();
            console.log(rctx.htmlElement)
        };

        const changeColor = (event) => {
            event.target.setAttribute('style','background-color: black');
        };

        /** randomly generates a number between 0-255 */
        const randomFunction = () => {
            return Math.ceil(Math.random() * (255 - 0) + 0); 
        };

        const colorChange = (event) => {
            console.log()
            rctx.renderingContext.fillRect(event.x, 100, 20, 20);
            rctx.renderingContext.fillStyle = 'black';
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

        /** displays the randomly generated color */
        const displayRandomColor = () => {
            const color = randomColorGenerator();
            const colorStr = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
            return colorStr;
        };





        document.getElementById('grid-input-field').addEventListener("submit", canvasSize)
        document.getElementById('canvas').addEventListener("click", colorChange)
});


/** GENERAL NOTES:
 * 1. althougth in general HTML element do not have a property type value, <input> tag does.
 * 
 */