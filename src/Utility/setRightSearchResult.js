export const setRightSearchResult = (searchResult, countryList) => {
    if (searchResult === "") return countryList;
    if (Array.isArray(countryList)) {

        let countryListStartsWith = countryList?.filter(
            country => {
                let officialNameArray = country?.data?.name?.official.split(" ")
                for (let i of officialNameArray) {
                    if (i.toLowerCase()?.startsWith(searchResult?.toLowerCase())) {
                        return true;
                    }
                }
            }
        );
        let countryListIncludes = countryList?.filter(
            country => country?.data?.name?.official?.toLowerCase()?.includes(searchResult?.toLowerCase())
        );
        let countryListCapitalStartsWith = countryList?.filter(
            country => Array.isArray(country?.data?.capital) && country?.data?.capital[0]?.toLowerCase()?.startsWith(searchResult?.toLowerCase())
        );

        return [...new Set([...countryListStartsWith, ...countryListIncludes, ...countryListCapitalStartsWith])]
    }
    else return null;
}