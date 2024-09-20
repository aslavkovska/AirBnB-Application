import React from 'react';
import {Link} from 'react-router-dom';

const accommodationRent = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.host.name} </td>
            <td>{props.term.availableNights}</td>
            <td className={"text-right"}>
                <Link className={"btn btn-primary ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/accommodations/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a title={"Delete"} className={"btn btn-danger m-1"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                {props.term.availableNights > 0 && (
                    <a
                        title={"Rent"}
                        className={"btn btn-secondary m-1"}
                        onClick={() => props.onRent(props.term.id)}
                    >
                        Rent
                    </a>
                )}
            </td>
        </tr>
    )
}

export default accommodationRent;
