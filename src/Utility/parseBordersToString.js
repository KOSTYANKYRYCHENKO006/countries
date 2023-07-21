import { parseCca3ToOfficialName } from "./parseCca3ToOfficialName"

export function parseBordersToString(countryBorders, countryList) {

    if(typeof countryBorders === "null"|| typeof countryBorders === "undefined") {
        return "none."
    } 

    let borders = parseCca3ToOfficialName(countryBorders, countryList);

    let result = [];

    for (let i = 0; i < borders?.length; i++) {

        let symbol = ", ";
        if (i === borders?.length - 1) symbol = ".";

        let element = <>
            <span key={i} className="borders-country">
                <a key={`a${i}`} href={`/countries/${countryBorders[i]}`}>
                {borders[i]}
                </a>
            </span>
            {symbol}
        </>

        result.push(element);
    }

    return result;
}