import "./style.scss"

export const Search = ({value, setValue}) => {
    return(
        <div>
            <div className="form">
                <form className="search_form">
                    <input
                    type="text"
                    placeholder="Поиск..."
                    className="search_input"
                    value={value}
                    onChange={(event) => setValue(event.target.value) }
                    onClick={inputClick}
                    />

                    <ul className="autocomplete">
                        <li className="autocomplete_item">Item</li>
                    </ul>
                </form>
            </div>
        </div>
    )

}