import {parseObjectToString} from "../../../../../../Utility/parseObjectToString"
import {countriesTimeZone} from "../../../../../../Utility/countriesTimeZone"

import "./style.css"


export const CurrentCountry = ({currentCountry, setCurrentMod}) => {
    return (
        <div className="current-country">
            <button className="undo-btn" onClick={() => setCurrentMod("all")}>{"<"}</button>
            <div className="name">
                {currentCountry?.name?.official}
            </div>

            <div className="coatOfArms">
                <img src={currentCountry?.coatOfArms?.png}></img>
            </div>

            <div className="flag">
                <img src={currentCountry?.flags?.png}></img> 
            </div>

            <div className="country">
               Capital: {currentCountry?.capital || "none"}
            </div>

            <div className="country">
                Languages: {parseObjectToString(currentCountry?.languages)}
            </div>

            <div className="country">
                Continent: {currentCountry?.continents}
            </div>

            <div className="country">
                Subregion: {currentCountry?.subregion || "none"}
            </div>

            <div className="country">
                Timezone: {countriesTimeZone(currentCountry?.timezones)}
            </div>

            <div className="country">
                Population: {currentCountry?.population}
            </div>

            <div className="country">
                Borders: {currentCountry?.borders}
            </div>

            <div className="country">
                Dayoff: {currentCountry?.startOfWeek}
            </div>

            <div className="country">
                Area: {currentCountry?.area}
            </div>
        
        </div>
    )
}