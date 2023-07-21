export function parseCca3ToOfficialName(cca3NamesArray, countriesOfficialNameList) {
    return cca3NamesArray
        ?.map(name => countriesOfficialNameList
            ?.find(country => country?.data?.cca3 === name)?.data?.name?.official);
}