export const Routes = {
    Home: "/countries/main",
    Countries: "/countries/countries/all",
    AboutUs: "/countries/aboutUs",

    CurrentCountry(currentCountryID) {
        return `/countries/countries/${currentCountryID}`
    }
}