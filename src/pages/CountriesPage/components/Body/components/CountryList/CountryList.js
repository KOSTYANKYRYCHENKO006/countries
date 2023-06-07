import { Country } from "./components/Country"

import "./style.css"

export const CountryList = ({ countryList }) => {
    return (
        <div className="country-list">
            {
            countryList && countryList.map(country => <Country currentCountry={country} />)
            }
        </div>
    )
}