export function parseObjectToString(languagesObject) {
    if(typeof languagesObject == 'null' || typeof languagesObject == 'undefined') {
        return "none"
    } 

    let languagesArray = Object.values(languagesObject);
    let languagesString = "";

    for(let i = 0; i < languagesArray.length; i++ ) {
        languagesString += languagesArray[i];
        if(i == languagesArray.length -1) {
            languagesString += ".";
        } else{
            languagesString += ", "; 
        }
    }

    return(languagesString)
}