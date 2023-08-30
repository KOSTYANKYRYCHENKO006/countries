import { filterConstants } from "../constants/filterConstants";

export const setRightFilterResult = (filterResult, countryList) => {

        let resultCountryList = countryList?.filter(
            (country) => {
                let isValid = false;

                if (country?.data?.independent && filterResult?.Independent?.independent) isValid = true
                if (!country?.data?.independent && filterResult?.Independent?.dependent) isValid = true
                if (Object.values(filterResult?.Continents)
                    ?.filter(
                        (elem) => elem[1] == true
                    )
                    ?.includes(country?.data?.continents)
                ) isValid = true

                if (country?.data?.landlocked && filterResult?.Landlocked?.yes) isValid = true
                if (!country?.data?.landlocked && filterResult?.Landlocked?.no) isValid = true


                if (isValid) return true
                else return false
            }
        )

        return resultCountryList
}