import React from 'react';

export default (props) => (
    <table className="table table-dark">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Pnone</th>
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