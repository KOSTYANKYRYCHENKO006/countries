import { sendRequest } from "../../services/sendRequest"
import { useEffect, useState } from "react"

import { Header } from "./components/Header"
import { Body } from "./components/Body"

import "./style.css"

export const CountriesPage = () => {

    const [currentTab, setCurrentTab] = useState("main")

    const [response, setResponse] = useState([]);

    const getResponse = () => {
        sendRequest(setResponse)
    }

    useEffect( () => getResponse(), [currentTab])

    console.log(response);

    return (
        <>
            <Header setCurrentTab={setCurrentTab} />
            <Body countryList={response} currentTab={currentTab} />
        </>
    )
}