import "./style.scss"

export const Search = ({value, setValue}) => {
    return(
        <div>
            <div className="form">
                <form className="search_form">
                    <input
                    type="text"
                    placeholder="Введите искомую страну"
                    className="search_input"
                    value={value}
                    onChange={(event) => setValue(event.target.value) }
                    />
                </form>
            </div>
        </div>
    )

}