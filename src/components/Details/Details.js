import React from 'react';

export default ({person}) => {

    let {firstName, lastName, description, address: {city, state, streetAddress, zip}} = person;
    
    return (
        <div>
            <p>Выбран пользователь: <b>{firstName + ' ' +lastName}</b></p>
            <p>Описание: <br />
                {description}
            </p>
            <p>Адресс проживания: <b>{streetAddress}</b></p>
            <p>Город: <b>{city}</b></p>
            <p>Провинция/Штат: <b>{state}</b></p>
            <p>Индекс: <b>{zip}</b></p>
        </div>
    )
}