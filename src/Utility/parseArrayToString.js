export function parseArrayToString(currentArray) {

    if(typeof currentArray === "null"|| typeof currentArray === "undefined") {
        return "none."
    } 
    
   let currentString = "";

   for(let i = 0; i < currentArray.length; i++) {
        currentString += currentArray[i];

        if(i === currentArray.length -1) {
            currentString += "."
        } else{
            currentString += ", "
        }
   }

   return(currentString)
}