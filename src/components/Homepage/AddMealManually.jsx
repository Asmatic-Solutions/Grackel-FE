import React from 'react';
import { Link } from 'react-router-dom';

function AddMealManually(props) {

    return (
    <div className="option wrapper add-meal-manually">
        <h1 className="title">Add meal manually</h1>
        <p className="description">Add meals products manually, adding the name, category & amound of energy the product has.</p>
        <Link to="/meal/manual">Add meal</Link>
    </div>
    );
}

export default AddMealManually;