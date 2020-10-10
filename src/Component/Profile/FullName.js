import { render } from '@testing-library/react';
import React from 'react';
function FullName(){
    let n=prompt("Full Name Please?");
    return(
        <div>
            <h4>Full Name</h4>
            <div style={{color:"red",fontSize:"20px"}}>{n.toUpperCase()}</div>
        </div>
    );
}
export default FullName;


