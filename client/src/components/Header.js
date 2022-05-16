import React from 'react';

function Header(props) {
const title = props.title
    return (
        <div className="card-content">
            <h1>{title}</h1>
        </div>

    );
}

export default Header;