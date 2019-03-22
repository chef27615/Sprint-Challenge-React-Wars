import React from 'react';

const Charactar = props =>{
    
    
    return(
        <div className="chars">
            <ul>
                <li>{props.char.name}</li>
                <li>{props.char.birth_year}</li>
                <li>{props.char.created}</li>
                <li>{props.char.edited}</li>
                <li>{props.char.eye_color}</li>
                
            </ul>
        </div>
    );
}


export default Charactar;