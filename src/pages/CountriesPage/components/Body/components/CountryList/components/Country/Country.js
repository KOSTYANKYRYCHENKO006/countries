import "./style.css"

export const Country = ({ currentCountry, setCurrentMod }) => {
    return (
        <div className="current-country__wrapper">
            <div className="current-country__name" onClick={() => setCurrentMod(currentCountry.name.official)}>
                {currentCountry.name.official}
            </div>
            <div className="country_flag">
                <img src = {currentCountry?.flags?.png} alt={currentCountry?.flags?.alt}></img>
            </div>
            <div className="coutry_info">
                <div className="country_capital">
              { currentCountry?.capital && "Capital: " + currentCountry?.capital }
            </div>
            <div className="country_area">
               Area: {currentCountry?.area } km
            </div>
            <div className="country_region">
                Region: {currentCountry?.region || "-"}
            </div>
            </div>
            
        </div>
    )
}