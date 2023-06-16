import "./style.css"

export const CurrentCountry = ({currentCountry, setCurrentMod}) => {
    return (
        <div className="current-country">
            <button className="undo-btn" onClick={() => setCurrentMod("all")}>{"<"}</button>
            <div>{currentCountry?.name?.official}</div>
        </div>
    )
}