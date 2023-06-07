import { CountryList } from "./components/CountryList"

import "./style.css"

export const Body = ({countryList}) => {
    return (
        <>
            {/* <Search /> */}
            <CountryList countryList={countryList} />
        </>
    )
}