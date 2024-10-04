/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom"
class TableRow extends React.Component {
    render() {
        const {name, email, numPhone, index, deleteLead} = this.props;

        return(
            <tr>
                <td><Link to="/info">{index}</Link></td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{numPhone}</td>
                <td>
                    <button onClick={() => {deleteLead(index)}}>Excluir</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;