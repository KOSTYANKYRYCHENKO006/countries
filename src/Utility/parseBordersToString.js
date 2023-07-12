import { parseCca3ToOfficialName } from "./parseCca3ToOfficialName"

export function parseBordersToString(countryBorders, countryList, setCurrentMod) {

    if(typeof countryBorders === "null"|| typeof countryBorders === "undefined") {
        return "none."
    } 

    let borders = parseCca3ToOfficialName(countryBorders, countryList);

    let result = [];

    for (let i = 0; i < borders?.length; i++) {

        let symbol = ", ";
        if (i === borders?.length - 1) symbol = ".";

        let element = <>
            <span className="borders-country" onClick={() => setCurrentMod(borders[i])}>
                {borders[i]}
            </span>
            {symbol}
        </>

        result.push(element);
    }

    return result;
}