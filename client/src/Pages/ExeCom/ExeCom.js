import React from 'react';
import Menubar from '../../Components/Navbar/Menubar';
const team = require("./ExeComDetails.json");


const ExeCom = () => {
    return (
        <div className='execom__page'>
            <Menubar backgroundClr={"#009ca6"} />
        </div>
    )
}

console.log(team);

export default ExeCom;