import React from 'react';
function Adress(){
    let ad=prompt("Adress please!");
    return(
        <div>
            <h4>Adresse</h4>
            {ad}
        </div>
    );
}
export default Adress;