import React from "react";

function Employee(props) {
    return (
        <tr>
            <th scope="row">
                <img alt={props.name} className="img-fluid" src={props.image} />
            </th>
            <td className="align-middle">{props.name}</td>
            <td className="align-middle">{props.phone}</td>
            <td className="align-middle">
                <a href={`mailto:${props.email}`}>
                    {props.email}
                </a>   
            </td>
            <td className="align-middle">{props.dob}</td>
        </tr>
    )
}

export default Employee;