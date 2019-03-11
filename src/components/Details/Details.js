import React from 'react';

export default ({person}) => {

    let {firstName, lastName, description, address: {city, state, streetAddress, zip}} = person;
    
    return (
        <div>
            <p>User: <b>{firstName + ' ' +lastName}</b></p>
            <p>Description: <br />
                {description}
            </p>
            <p>Address: <b>{streetAddress}</b></p>
            <p>City <b>{city}</b></p>
            <p>State: <b>{state}</b></p>
            <p>ZIP: <b>{zip}</b></p>
        </div>
    )
}