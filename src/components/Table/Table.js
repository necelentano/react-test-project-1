import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => (
    <table className="table table-dark">
        <thead>
            <tr>
            <th scope="col" onClick={() => {props.onSort('id')}}>
                ID{props.sortField === 'id' ? <small>{props.sort}</small> : null}
            </th>
            <th scope="col" onClick={() => {props.onSort('firstName')}}>
                First Name {props.sortField === 'firstName' ? <small>{props.sort}</small> : null}
            </th>
            <th scope="col" onClick={() => {props.onSort('lastName')}}>
                Last Name {props.sortField === 'lastName' ? <small>{props.sort}</small> : null}
            </th>
            <th scope="col" onClick={() => {props.onSort('email')}}>
                Email {props.sortField === 'email' ? <small>{props.sort}</small> : null}
            </th>
            <th scope="col" onClick={() => {props.onSort('phone')}}>
                Pnone {props.sortField === 'phone' ? <small>{props.sort}</small> : null}
            </th>
            </tr>
        </thead>
        <tbody>
            {props.data.map((item) => (
                <tr key={`${item.id}-${item.email}`} onClick={() => {props.onRowSelect(item)}}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
)

Table.propTypes = {
    data: PropTypes.array.isRequired,
    onRowSelect: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
    sortField: PropTypes.string.isRequired
}

export default Table;