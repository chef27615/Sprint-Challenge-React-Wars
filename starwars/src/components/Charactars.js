import React from 'react';
import Charactar from './Charactar';

const Charactars = props =>{
    
console.log(props.chars)
    return(
        <div>
            <div>
                {props.chars.map((charFromMap, index) =>  
                    <Charactar char={charFromMap} key={index} />) 
                }
            </div>
        </div>
    );
}


export default Charactars;