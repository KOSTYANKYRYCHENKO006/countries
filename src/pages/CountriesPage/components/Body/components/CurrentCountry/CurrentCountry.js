import {parseObjectToString} from "../../../../../../Utility/parseObjectToString"

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

            <div className="capital">
               Capital: {currentCountry?.capital}
            </div>

            <div className="languages">
                Languages: {parseObjectToString(currentCountry?.languages)}
            </div>

            <div className="continents">
                Continent: {currentCountry?.continents}
            </div>

            <div className="subregion">
                Subregion: {currentCountry?.subregion}
            </div>

            <div className="timezone">
                Timezone: {currentCountry?.timezones}
            </div>
        
        </div>
    )
}