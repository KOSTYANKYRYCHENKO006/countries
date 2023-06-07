export const Country = ({ currentCountry }) => {
    return (
        <>
            <h3>{currentCountry.name.common}</h3>
            <div>area: {currentCountry.area}km</div>
        </>
    )
}