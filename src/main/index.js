

const canvas = (size) => {
    const canvasElement = document.getElementById('canvas');
    const rContext = canvasElement.getContext('2d');
    console.log(canvasElement);
    console.log(rContext);
}

const definedGridSize = (event) => {
    const userInputGridSize = {};
    // prevents default behavior of the submitEvent which is submitting data to the server
    event.preventDefault();
    // user input width 
    const definedWidth = document.getElementById('width-input').value;
    // creating new property width
    userInputGridSize['width'] = Number(definedWidth);
    // user input length
    const definedLength = document.getElementById('length-input').value;
    // creating new property length
    userInputGridSize['length'] = Number(definedLength);
    // logging defined grid suze
    canvas(userInputGridSize);
    
};

document.getElementById('grid-input-field').addEventListener("submit", definedGridSize)




/** NOTES:
 * 1. althougth in general HTML element do not have a property type value, <input> tag does.
 * 
 */