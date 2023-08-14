import { useContext, useState } from "react";

import { setRightSearchResult } from "../../utility/setRightSearchResult"
import { CountryListContext } from "../../pages/RestCountriesReact/RestCountriesReact";

import logo from "../../images/Globe-transformed.png"

import "./style.scss"

export const Title = () => {

    const [searchResult, setSearchResult] = useState("")
    let countryList = useContext(CountryListContext);

    let filteredCountryList = setRightSearchResult(searchResult, countryList);

    return (
        <div className="wrapper">
            <div className="logo_img">
                <img className="img" src={logo} alt=""></img>

                <div className="header_info">
                    <h3 className="countries_header"><a className="title_href" href="/countries/all">Страны</a></h3>
                    <p className="paragrapf_logo">Это веб-сайт про страны</p>
                </div>
            </div>
            <hr></hr>
            <div className="search">
                <input type="text"
                    placeholder="Поиск..."
                    value={searchResult}
                    onChange={(event) => setSearchResult(event?.target?.value)}
                >
                </input>
                {
                 searchResult && <button className="clear-button" onClick={() => setSearchResult("")}>X</button>
                }
                <ul className="autocomplete">
                    {
                        searchResult && filteredCountryList?.map(
                            country => {
                                return (
                                    <a href={`/countries/countries/${country?.data?.cca3}`}>
                                        <li className="autocomplete_item">
                                            {country?.data?.name?.official}
                                        </li>
                                    </a>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

