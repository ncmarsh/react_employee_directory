import React from "react";

const styles = {
    searchField: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5px",
    }
}

function SearchBar(props) {
    return (
        <form className="form-inline" style={styles.searchField}>
            <div className="form-group row">
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="search"
                />
            </div>
        </form>
    )
}

export default SearchBar;