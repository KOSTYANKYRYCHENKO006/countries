export function parseObjectToString(currentObject) {

    if(typeof currentObject === "null"|| typeof currentObject === "undefined") {
        return "none."
    } 

    let currentArray = Object.values(currentObject);

    let currentString = "";

    for(let i = 0; i < currentArray.length; i++ ) {
        currentString += currentArray[i];
        if(i === currentArray.length -1) {
            currentString += ".";
        } else{
            currentString += ", "; 
        }
    }

    return(currentString)
}