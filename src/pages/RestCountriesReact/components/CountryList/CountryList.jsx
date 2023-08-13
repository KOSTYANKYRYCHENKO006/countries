import { useContext, useState } from "react"
import { CountryListContext } from "../../RestCountriesReact"

import { Country } from "./components/Country"
import { Search } from "../Search"

import "./style.scss"

export const CountryList = () => {

    let countryList = useContext(CountryListContext);
    let [searchResult, setSearchResult] = useState('')

    let filteredCountryList = countryList.filter(
        country => country
            ?.data
            ?.name
            ?.official
            ?.toLowerCase()
            ?.includes(searchResult?.toLowerCase())
    )

    const [isOpen, setIsOpen] = useState(true)

    const itemClickHandler = (event) => {
        setValue(event.target.textContent)
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    return (
        <div>
            <Search value={searchResult} setValue={setSearchResult} />
            <div className="country-list">
                {
                    filteredCountryList && filteredCountryList.map((country, index) => <Country key={index} currentCountry={country?.data} />)
                }
            </div>
        </div>
    )
}

<ul className="autocomplete">
    {
       value && isOpen?countryList.map((country, index) => {
            return(
                <li className="autocomplete_item">
                    {country.name}
                    onClick={itemClickHandler}
                </li>
            )
        })
        :null
    }
</ul>

