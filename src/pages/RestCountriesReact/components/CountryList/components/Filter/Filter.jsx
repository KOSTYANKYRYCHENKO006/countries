import "./style.scss"

export const Filter = ({ filtersValue, setFiltersValue }) => {

    let filterEntriesArray = Object.entries(filtersValue);
    console.log(filterEntriesArray)

    return (
        <div className="filter-block">
            {
                filterEntriesArray.map(
                    (filterPair) => {
                        return (
                            <div className="filter">
                                {filterPair[0]}: <div className="filters">
                                    {
                                        Object.entries(filterPair[1]).map(
                                            (filter) =>
                                                <div>
                                                    <input onChange={
                                                        () => {
                                                            let newFilters = filtersValue;
                                                            newFilters[filterPair[0]][filter[0]] = !filter[1]
                                                            setFiltersValue(newFilters)
                                                        }
                                                    }
                                                        defaultChecked = {filter[1]}
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
    )

}