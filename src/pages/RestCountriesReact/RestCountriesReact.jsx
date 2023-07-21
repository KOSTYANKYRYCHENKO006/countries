import { sendRequest } from "../../services/sendRequest"
import { createContext, useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Header } from "./components/Header"
import { MainPage } from "./components/MainPage"
import { CountryList } from "./components/CountryList"
import { CurrentCountry } from "./components/CurrentCountry";
import { CountriesPage } from "./components/CountriesPage"

import "./style.scss"

export let CountryListContext = createContext([]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/countries",
        element: <CountriesPage />,
        children: [
            {
                path: "all",
                element: <CountryList />
            },
            {
                path: ":currentCountryID",
                element: <CurrentCountry />
            }
        ]
    },

    // {
    //     path:"/aboutUs",
    //     element: <AboutUs/>
    // }
]);

export const RestCountriesReact = () => {

    const [response, setResponse] = useState([]);

    const getResponse = () => {
        sendRequest(setResponse)
    }

    useEffect(() => getResponse(), [])

    console.log(response);

    return (
        <>
            <Header />

            <CountryListContext.Provider value={response}>
                <RouterProvider router={router}></RouterProvider>
            </CountryListContext.Provider>
        </>
    )
}