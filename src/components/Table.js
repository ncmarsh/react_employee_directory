import React from "react";

function Table(props) {
    return (
        <table className="table table-striped table-dark table-hover">
        <thead>
            <tr>
            <th scope="col">Picture</th>
            <th value="name.first" scope="col" onClick={props.colOrder}>Name</th>
            <th value="phone" scope="col" onClick={props.colOrder}>Phone</th>
            <th value="email" scope="col" onClick={props.colOrder}>Email</th>
            <th value="dob" scope="col" onClick={props.colOrder}>DOB</th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
        </table>
    );
}

export default Table;