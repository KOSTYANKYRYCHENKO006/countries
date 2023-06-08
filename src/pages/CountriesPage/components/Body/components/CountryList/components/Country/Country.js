export const Country = ({ currentCountry }) => {
    return (
        <>
            <h3>{currentCountry.name.common}</h3>
            <div>capital: {currentCountry.capital}</div>
            <div>borders: {currentCountry.borders}</div>
            <div>area: {currentCountry.area}km</div>
            <div>region: {currentCountry.region}</div>
            <div>subregion: {currentCountry.subregion}</div>
            <div>flags: {currentCountry.flags}</div>
        </>
    )
}