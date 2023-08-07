export const Search = () => {
    return(
        <div>
            <div className="form">
                <form className="search_form">
                    <input
                    type="text"
                    placeholder="search_placeholder"
                    className="search_input"
                    value={searchTerm}
                    onChange={handlesearch}
                    />
                </form>
            </div>
        </div>
    )

}