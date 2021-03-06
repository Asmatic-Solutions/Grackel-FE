import React from 'react';

function AddKcalManually(props) {

    return (
    <div className="option wrapper add-manually wide">
        <h1 className="title">Add kcals manually</h1>
        <div className="controls">
            <input type="number" min="1" max={5000} name="amount" placeholder="Enter amount"  onChange={props.handleKcalChange}/>
            <button onClick={props.addKcalAmount}>Add</button>
        </div>
    </div>
    );
}

export default AddKcalManually;