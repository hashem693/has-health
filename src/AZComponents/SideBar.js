import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBar(props) {
    return (
        <div className="clearfix mb-5">
            <h6>{props.head}</h6>
            <hr/>
            {props.children}
        </div>
    ) 
}

export default SideBar;