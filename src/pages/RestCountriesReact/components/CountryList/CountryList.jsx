import { useContext, useState } from "react"
import { CountryListContext } from "../../RestCountriesReact"

import {setRightSearchResult} from "../../../../utility/setRightSearchResult"

import { Country } from "./components/Country"
import { Search } from "../Search"

import "./style.scss"

export const CountryList = () => {

    let countryList = useContext(CountryListContext);
    let [searchResult, setSearchResult] = useState('')

    let filteredCountryList = setRightSearchResult(searchResult, countryList);

    return (
        <div>
            <Search countryList={countryList} value={searchResult} setValue={setSearchResult} />
            <div className="country-list">
                {
                    filteredCountryList && filteredCountryList.map((country, index) => <Country key={index} currentCountry={country?.data} />)
                }
            </div>


        </div>
    )
}




