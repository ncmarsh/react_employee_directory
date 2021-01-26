import React from "react";

function Table(props) {
    return (
        <table className="table table-striped table-dark table-hover">
        <thead>
            <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
        </table>
    );
}

export default Table;