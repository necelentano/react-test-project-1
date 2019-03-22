import React from 'react';
import PropTypes from 'prop-types';

const Details = ({person}) => {

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

Details.propTypes = {
    person: PropTypes.shape({
        address: PropTypes.shape({
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            streetAddress: PropTypes.string.isRequired,
            zip: PropTypes.string.isRequired
        }),
        description: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        phone: PropTypes.string.isRequired
    })
}

export default Details;