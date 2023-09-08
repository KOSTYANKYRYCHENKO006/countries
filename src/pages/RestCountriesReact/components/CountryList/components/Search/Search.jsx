import "./style.scss"

export const Search = ({ value, setValue }) => {
    return (
        <div className="form">
            <input
                type="text"
                placeholder="Поиск..."
                className="search_input"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>

    )

}