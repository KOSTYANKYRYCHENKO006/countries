import { Link } from "react-router-dom"
import {Routes} from "../../../../../../constants/Routes"

import "./style.scss"

export const Country = ({ currentCountry }) => {
    return (
        <div className="current-country__wrapper">
            <div className="current-country__name">
                <Link to={`${Routes.CurrentCountry(currentCountry.cca3)}`}>
                    {currentCountry.name.official}
                </Link>
            </div>
            <div className="country_flag">
                <img src={currentCountry?.flags?.png} alt={currentCountry?.flags?.alt}></img>
            </div>
            <div className="country_info">
                <div>
                    {currentCountry?.capital && "Capital: " + currentCountry?.capital}
                </div>
                <div>
                    Area: {currentCountry?.area} km
                </div>
                <div >
                    Region: {currentCountry?.region || "-"}
                </div>
            </div>

        </div>
    )
}