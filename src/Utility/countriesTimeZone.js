export function countriesTimeZone(timeZoneArray) {

    if(typeof timeZoneArray == 'null' || typeof timeZoneArray == 'undefined') {
        return "none"
    } 
    
   let timeZoneString = "";

   for(let i = 0; i < timeZoneArray.length; i++) {
        timeZoneString += timeZoneArray[i];

        if(i == timeZoneArray.length -1) {
            timeZoneString += "."
        } else{
            timeZoneString += ", "
        }
   }

   return(timeZoneString)

   


}