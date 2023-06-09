import "./style.css"

export const Country = ({ currentCountry }) => {
    return (
        <div className="current-country__wrapper">
            <div className="current-country__name">
                {currentCountry.name.official}
            </div>
        </div>
    )
}