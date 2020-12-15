import React from 'react';
import { Link } from 'react-router-dom';

function HomePageLink({title,path,info}) {

    return (
        <Link to={path} className="option wrapper link">
            <h1 className="title">{title}</h1>
            {info?<p>{info}</p>:null}
        </Link>
    );
}

export default HomePageLink;