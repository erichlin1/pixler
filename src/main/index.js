// console log all paragraphs within the first div element
export const doc = () => {
    let elementNodes = 0;
    let otherNodes = 0;
    const firstDiv = document.body.children.item(1);
    const nodeListOfFirstDiv = firstDiv.childNodes;
    nodeListOfFirstDiv.forEach((node) => {
        node instanceof Element ? elementNodes += 1 : otherNodes += 1;
    });
    console.log(`number of element nodes: ${elementNodes}, number of other nodes: ${otherNodes}`);
    console.log(nodeListOfFirstDiv);
};
