import React from 'react';

export default (props) => (
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
            {props.data.map(({id, firstName, lastName, email, phone}) => (
                <tr key={`${id}-${email}`}>
                    <td>{id}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
)