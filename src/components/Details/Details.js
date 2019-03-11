import React from 'react';

export default ({person}) => {

    let {firstName, lastName, description, address: {city, state, streetAddress, zip}} = person;
    
    return (
        <div>
            <p><b>User:</b> {firstName + ' ' +lastName}</p>
            <p><b>Description:</b> <br />
                {description}
            </p>
            <p><b>Address:</b> {streetAddress}</p>
            <p><b>City:</b> {city}</p>
            <p><b>State:</b> {state}</p>
            <p><b>ZIP:</b> {zip}</p>
        </div>
    )
}