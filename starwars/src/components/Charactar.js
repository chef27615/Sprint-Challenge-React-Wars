import React from 'react';

const Charactar = props =>{
    
    const {name, birth_year, height, mass, eye_color, skin_color, homeworld} = props.char
    return(
        <div className="chars">
            <ul className="chars_detail">
                <li>Name: {name}</li>
                <li>Birth: {birth_year}</li>
                <li>Height: {height}</li>
                <li>Mass: {mass}</li>
                <li>Eye Color: {eye_color}</li>
                <li>Skin Color: {skin_color}</li>
                <li>Home: {homeworld}</li>
            </ul>
        </div>
    );
}


export default Charactar;