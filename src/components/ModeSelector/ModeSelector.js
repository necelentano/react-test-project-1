import React from 'react';

import './ModeSelector.css';

export default props => {

    const smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

    const bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

    return (
        <div className='box'>
            <button 
                className="btn btn-success" 
                onClick={() => {props.modeSelectHandler(smallData)}}>32 elements</button>
             <button 
                className="btn btn-danger" 
                onClick={() => {props.modeSelectHandler(bigData)}}>1000 elements</button>
        </div>
    )
}