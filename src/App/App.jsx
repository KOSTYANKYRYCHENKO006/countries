import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { RestCountriesReact } from '../pages/RestCountriesReact';
import { MainPage } from "../pages/RestCountriesReact/components/MainPage"
import { CountryList } from "../pages/RestCountriesReact/components/CountryList"
import { CurrentCountry } from "../pages/RestCountriesReact/components/CurrentCountry";
import { CountriesPage } from "../pages/RestCountriesReact/components/CountriesPage"

import './App.scss';

const router = createBrowserRouter([
  {
    path: "/countries",
    element: <Navigate to={"/countries/main"} />
  },
  {
    path: "/countries",
    element: <RestCountriesReact />,
    children: [
      {
        path: "main",
        element: <MainPage />,
      },
      {
        path: "countries",
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

      //{
      // path:"/aboutUs",
      // element: <AboutUs/>
      //}
    ]
  }
]);

export function App() {
  return (
    <div className="App">
      <div className='App-background'>
        <div className='App-wrapper'>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </div>
  );
}