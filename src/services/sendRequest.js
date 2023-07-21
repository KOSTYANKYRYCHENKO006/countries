import { ApiConnect } from "./ApiConnect"

export const sendRequest = (setResponse) => {
    ApiConnect.sendRequest().then(
        (response) => setResponse(
            response.response.map(country => {
                return {
                    id: country?.cca3,
                    data: country
                }
            })
        )
    );
}