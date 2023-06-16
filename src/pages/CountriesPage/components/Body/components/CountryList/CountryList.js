import { useState } from "react"
import { Country } from "./components/Country"
import { CurrentCountry } from "../CurrentCountry/CurrentCountry"

import "./style.css"

export const CountryList = ({ countryList }) => {

    const [currentMod, setCurrentMod] = useState("all");

    let currentModElement;

    switch (currentMod) {
        case "all":
            currentModElement = countryList && countryList.map(country => <Country setCurrentMod={setCurrentMod} currentCountry={country} />);
            break;
        default:
            currentModElement = <CurrentCountry setCurrentMod={setCurrentMod} currentCountry={countryList.filter(country => country?.name?.official == currentMod)[0]} />
    }

    return (
        <div className="country-list">
            {currentModElement}
        </div>
    )
}