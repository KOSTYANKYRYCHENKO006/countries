import { sendRequest } from "../../services/sendRequest"
import { createContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom";

import { Header } from "./components/Header"

import "./style.scss"

export let CountryListContext = createContext([]);

export const RestCountriesReact = () => {

    const [response, setResponse] = useState([]);

    const getResponse = () => {
        sendRequest(setResponse)
    }

    useEffect(() => getResponse(), [])

    console.log(response);

    return (
        <div className="rest-countries-react">
            <Header />

            <CountryListContext.Provider value={response}>
                <Outlet />
            </CountryListContext.Provider>
        </div>
    )
}