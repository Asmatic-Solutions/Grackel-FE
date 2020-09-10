import React from 'react';
import './addPage.scss';
import ManuallyAdd from './ManuallyAdd';

function AddPage() {
  return (
    <div className="add-meals-page">
        <ManuallyAdd></ManuallyAdd>
    </div>
  );
}

export default AddPage;
