import "./style.scss"

export const Country = ({ currentCountry }) => {
    return (
        <div className="current-country__wrapper">
            <div className="current-country__name">
                <a href={`/countries/${currentCountry.cca3}`}>
                    {currentCountry.name.official}
                </a>
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