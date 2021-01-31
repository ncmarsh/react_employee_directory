import React from "react";

const styles = {
    jumbotron: {
        marginBottom: "0px",
        textAlign: "center",
        backgroundColor: "#6593F5"
    }
}

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on the Name column heading to filter by first name or use the search bar to narrow your results.</p>
            </div>
        </div>
    )
}

export default Jumbotron;