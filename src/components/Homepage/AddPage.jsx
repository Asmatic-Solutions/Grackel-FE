import React from 'react';
import './addPage.scss';

function AddPage() {
  return (
    <div className="add-meals-page">
        <div className="option add-manually">
            <h1 className="title">Add manually</h1>
            <div className="controls">
                <input type="number" min="1" max="5000" name="amount" placeholder="Enter amount"/>
                <button>Add</button>
            </div>
        </div>
        <div className="option add-manually">
            <h1 className="title">Hello</h1>
            <div className="controls">
                <input type="number" min="1" max="5000" name="amount" placeholder="Enter amount"/>
                <button>Add</button>
            </div>
        </div>
    </div>
  );
}

export default AddPage;
