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

            <div className="infoCountry">
               Capital: {currentCountry?.capital || "none"}
            </div>

            <div className="infoCountry">
                Languages: {parseObjectToString(currentCountry?.languages)}
            </div>

            <div className="infoCountry">
                Continent: {currentCountry?.continents}
            </div>

            <div className="infoCountry">
                Subregion: {currentCountry?.subregion || "none"}
            </div>

            <div className="infoCountry">
                Timezone: {countriesTimeZone(currentCountry?.timezones)}
            </div>

            <div className="infoCountry">
                Population: {currentCountry?.population}
            </div>

            <div className="infoCountry">
                Borders: {currentCountry?.borders}
            </div>

            <div className="infoCountry">
                Dayoff: {currentCountry?.startOfWeek}
            </div>

            <div className="infoCountry">
                Area: {currentCountry?.area}
            </div>
        
        </div>
    )
}