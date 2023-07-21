import { parseObjectToString } from "../../../../utility/parseObjectToString"
import { parseArrayToString } from "../../../../utility/parseArrayToString"
import { parseBordersToString } from "../../../../utility/parseBordersToString"
import { setZoomScale } from "../../../../utility/setZoomScale"

import { GoogleMapCustom } from "../../../../components/GoogleMap/GoogleMapCustom"

import "./style.scss"

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
                    <div className="country_info">
                        <div>
                            Capital: {currentCountry?.capital || "none."}
                        </div>

                        <div>
                            Languages: {parseObjectToString(currentCountry?.languages)}
                        </div>

                        <div>
                            Continent: {currentCountry?.continents}
                        </div>

                        <div>
                            Subregion: {currentCountry?.subregion || "none."}
                        </div>

                        <div>
                            Timezone: {parseArrayToString(currentCountry?.timezones)}
                        </div>

                        <div>
                            Population: {currentCountry?.population} peoples.
                        </div>

                        <div className="borders">
                            <div className="borders_title">
                                Borders:
                            </div>
                            <div className="borders_items">
                                {parseBordersToString(currentCountry?.borders, countryList, setCurrentMod)}
                            </div>
                        </div>

                        <div>
                            Dayoff: {currentCountry?.startOfWeek}
                        </div>

                        <div>
                            Area: {currentCountry?.area} km²
                        </div>
                    </div>
                </div>
