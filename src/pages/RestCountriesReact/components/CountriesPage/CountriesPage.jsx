import { Outlet } from "react-router-dom";

import "./style.scss"

export const CountriesPage = () => {
    return (
        <div className="countries-page">
            <Outlet />
        </div>
    )
}