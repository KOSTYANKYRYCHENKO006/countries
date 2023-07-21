import "./style.scss"

export const Country = ({ currentCountry, setCurrentMod }) => {
    return (
        <div className="current-country__wrapper">
            <div className="current-country__name" onClick={() => setCurrentMod(currentCountry.name.official)}>
                {currentCountry.name.official}
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