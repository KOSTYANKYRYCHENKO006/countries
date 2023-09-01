export const setRightFilterResult = (filterResult, countryList) => {

    let resultCountryList = countryList?.filter(
        (country) => {
            let isValid = false;

            if (filterResult?.Independent?.independent && country?.data?.independent) isValid = true;
            else if ((filterResult?.Independent?.dependent && !country?.data?.independent)) isValid = true;
            else return false

            if (filterResult?.Continents[country?.data?.continents[0]]) isValid = true;
            else return false

            if (filterResult?.Landlocked?.yes && country?.data?.landlocked) isValid = true;
            else if (filterResult?.Landlocked?.no && !country?.data?.landlocked) isValid = true;
            else return false

            return isValid;
        }
    )

    return resultCountryList
}