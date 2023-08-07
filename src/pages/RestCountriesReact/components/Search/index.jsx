import { useState } from "react"

export {Search} from "./Search"

function App () {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
}

const handlesearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value)
}

const results = data.filter(item =>
    item.name.toLowerCase().incluses(value)
    );

