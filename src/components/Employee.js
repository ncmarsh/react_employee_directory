import React from "react";

function Employee(props) {
    return (
        <tr>
            <th scope="row">
                <img alt={props.name} className="img-fluid" src={props.image} />
            </th>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>
                <a href={`mailto:${props.email}`}>
                    {props.email}
                </a>   
            </td>
            <td>{props.dob}</td>
        </tr>
    )
}

export default Employee;