import Color from './color.js';

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

/** displays the randomly generated color */
export default function displayRandomColor() {
    const color = randomColorGenerator();
    const colorStr = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
    return colorStr;
};