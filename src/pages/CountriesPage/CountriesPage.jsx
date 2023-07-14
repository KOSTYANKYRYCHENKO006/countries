import { sendRequest } from "../../services/sendRequest"
import { useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./components/Header"
import { MainPage } from "./components/MainPage"
import { CountryList } from "./components/CountryList"

import "./style.scss"
import { CurrentCountry } from "./components/CurrentCountry/CurrentCountry";

export const CountriesPage = () => {

    let isResponse = true;

    const [response, setResponse] = useState([]);

    const getResponse = () => {
        sendRequest(setResponse)
    }

    useEffect(() => getResponse(), [isResponse])

    console.log(response);

    const router = createBrowserRouter([
        {
            path: "/main",
            element: <MainPage />,
        },
        {
            path: "/countries",
            element: <CountryList countryList={response} />
        },
        response?.map(country => {
            return {
                path:`/countries/${country?.name?.common}`,
                element:<CurrentCountry currentCountry={country} countryList={response}/>
            }
        }),
    
        // {
        //     path:"/aboutUs",
        //     element: <AboutUs/>
        // }
    ]);

    return (
        <>
            <Header />

            <RouterProvider router={router}></RouterProvider>
        </>
    )
}