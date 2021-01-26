import React from "react";

const styles = {
    jumbotron: {
        marginBottom: "5px",
        textAlign: "center"
    }
}

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid" style={styles.jumbotron}>
            <div className="container">
                <h1 className="display-4">Employee Directory</h1>
                <p className="lead">Click on the column heading to filter or use the search bar to narrow your results.</p>
            </div>
        </div>
    )
}

export default Jumbotron;