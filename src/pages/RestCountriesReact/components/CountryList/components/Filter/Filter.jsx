import { useState } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import "./style.scss"

export const Filter = ({ filtersValue, setFiltersValue }) => {

    const [filterHidden, setFilterHidden] = useState(true);
    if (!filterHidden) {
        document?.querySelector("#filter-block")?.classList?.add("filter-block__unwrapped")
    }
    else {
        document?.querySelector("#filter-block")?.classList?.remove("filter-block__unwrapped")
    }

    let filterEntriesArray = Object.entries(filtersValue);
    console.log(filterEntriesArray)

    return (
        <div className="filter-wrapper">
            <div id="filter-block" className="filter-block">
                {
                    filterEntriesArray.map(
                        (filterPair) => {
                            return (
                                <div key={filterPair} className="filter">
                                    {filterPair[0]}: <div className="filters">
                                        {
                                            Object.entries(filterPair[1]).map(
                                                (filter) =>
                                                    <div key={filter}>
                                                        <input onChange={
                                                            () => {
                                                                let newFilters = Object.assign({}, filtersValue);
                                                                newFilters[filterPair[0]][filter[0]] = !filter[1]
                                                                setFiltersValue(newFilters)
                                                            }
                                                        }
                                                            checked={filter[1]}
                                                            type="checkbox"
                                                            name={filter[0]}
                                                            id={filter[0]}
                                                        />
                                                        <label htmlFor={filter[0]}>{filter[0]}</label>
                                                    </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div
                className="filter-switcher"
                onClick={
                    () => setFilterHidden(!filterHidden)
                }
            >
                <FilterAltIcon /> Filter
            </div>
        </div>
    )

}