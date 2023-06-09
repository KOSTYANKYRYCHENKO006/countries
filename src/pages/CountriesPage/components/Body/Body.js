import { CountryList } from "./components/CountryList"
import { MainPage } from "./components/MainPage";

import "./style.css"

export const Body = ({ countryList, currentTab }) => {

    let currentTabElement;
    switch (currentTab) {
        case "main":
            currentTabElement = <MainPage />
            break;
        case "countries":
            currentTabElement = <CountryList countryList={countryList} />
            break;
        // case "aboutUs":
        //     currentTabElement = <AboutUs/>
        // break;
        // case "contacts":
        //     currentTabElement = <Contacts/>
        //     break;

        }

    return (
        <>
            {/* <Search /> */}
            {currentTabElement}
        </>
    )
}