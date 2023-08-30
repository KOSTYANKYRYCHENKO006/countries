import { useContext, useState } from "react"
import { CountryListContext } from "../../RestCountriesReact"

import { setRightSearchResult } from "../../../../utility/setRightSearchResult"
import { setRightFilterResult } from "../../../../utility/setRightFilterResult"
import { filterConstants } from "../../../../constants/filterConstants"

import { Country } from "./components/Country"
import { Search } from "./components/Search"
import { Filter } from "./components/Filter/Filter"

import "./style.scss"

export const CountryList = () => {

    let countryList = useContext(CountryListContext);
    let [searchResult, setSearchResult] = useState('')
    // let [filterResult, setFilterResult] = useState(filterConstants)

    let filteredCountryList =  setRightSearchResult(searchResult, countryList);
    
    // filteredCountryList = setRightFilterResult(filterResult, countryList);


    return (
        <div>
            <Search countryList={countryList} value={searchResult} setValue={setSearchResult} />
            {/* <Filter filtersValue={filterResult} setFiltersValue={setFilterResult} /> */}

            <div className="country-list">
                {
                    filteredCountryList && filteredCountryList.map((country, index) => <Country key={index} currentCountry={country?.data} />)
                }
            </div>


        </div>
    )
}




