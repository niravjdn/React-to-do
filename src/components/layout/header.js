import React from 'react'

function Header() {
    return ( 
        <h1  style={headerStyle}> ToDo List </h1>
    );
}

const headerStyle = {
    background: '#333',
    color : 'white',
    textAlign : 'center',
    padding : '10px'

}

export default Header;