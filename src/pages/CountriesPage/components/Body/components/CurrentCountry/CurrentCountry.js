import { parseObjectToString } from "../../../../../../utility/parseObjectToString"
import { parseArrayToString } from "../../../../../../utility/parseArrayToString"
import { parseBordersToString } from "../../../../../../utility/parseBordersToString"

import "./style.css"

export const CurrentCountry = ({ currentCountry, setCurrentMod, countryList }) => {
    return (
        <div className="current-country">
            <button className="undo-btn" onClick={() => setCurrentMod("all")}>{"<"}</button>
            <div className="name">
                {currentCountry?.name?.official}
            </div>
            <div className="sides">
                <div className="left-side">
                    <div className="flags">
                        <div className="flag">
                            <img src={currentCountry?.flags?.png} alt={currentCountry?.flags?.alt}></img>
                        </div>
                        {
                            currentCountry?.coatOfArms &&
                            <div className="coatOfArms">
                                <img src={currentCountry?.coatOfArms?.png} alt=""></img>
                            </div>
                        }
                    </div>

                    <div className="country">
                        Capital: {currentCountry?.capital || "none."}
                    </div>

                    <div className="country">
                        Languages: {parseObjectToString(currentCountry?.languages)}
                    </div>

                    <div className="country">
                        Continent: {currentCountry?.continents}
                    </div>

                    <div className="country">
                        Subregion: {currentCountry?.subregion || "none."}
                    </div>

                    <div className="country">
                        Timezone: {parseArrayToString(currentCountry?.timezones)}
                    </div>

                    <div className="country">
                        Population: {currentCountry?.population} peoples.
                    </div>

                    <div className="country">
                        Borders: {parseBordersToString(currentCountry?.borders, countryList, setCurrentMod)}
                    </div>

                    <div className="country">
                        Dayoff: {currentCountry?.startOfWeek}
                    </div>

                    <div className="country">
                        Area: {currentCountry?.area} km²
                    </div>
                </div>

                <div className="right-side">
                    MAP
                </div>
            </div>
        </div>
    )
}