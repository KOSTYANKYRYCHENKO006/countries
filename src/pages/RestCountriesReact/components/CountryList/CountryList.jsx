import { useContext } from "react"
import { CountryListContext } from "../../RestCountriesReact"

import { Country } from "./components/Country"

import "./style.scss"

export const CountryList = () => {

    let countryList = useContext(CountryListContext);

    return (
        <div className="country-list">
            {
                countryList && countryList.map((country, index) => <Country key={index} currentCountry={country?.data} />)
            }
        </div>
    )
}