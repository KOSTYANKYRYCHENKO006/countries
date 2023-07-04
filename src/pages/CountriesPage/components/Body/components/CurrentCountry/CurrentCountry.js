import "./style.css"

export const CurrentCountry = ({currentCountry, setCurrentMod}) => {
    return (
        <div className="current-country">
            <button className="undo-btn" onClick={() => setCurrentMod("all")}>{"<"}</button>
            <div className="name">
                {currentCountry?.name?.official}
            </div>

            <div className="flag">
                <img src={currentCountry?.flags?.png}></img> 
            </div>

            <div className="coatOfArms">
                <img src={currentCountry?.coatOfArms?.png}></img>
            </div>

            <div className="capital">
               Capital: {currentCountry?.capital}
            </div>

            <div className="languages">
                Languages: {currentCountry?.languages}
            </div>
        </div>
    )
}