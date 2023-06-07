import { sendRequest } from "../../services/sendRequest"
import { useState } from "react"

import { Header } from "./components/Header"
import { Body } from "./components/Body"

import "./style.css"

export const CountriesPage = () => {

    const [response, setResponse] = useState();

    const getResponse = () => {
        sendRequest(setResponse)
    }

    console.log(response);

    return (
        <>
            <button className="refresher" onClick={getResponse}>Refresh</button>
            <Header />
            <Body countryList={response}/>

        </>
    )
}