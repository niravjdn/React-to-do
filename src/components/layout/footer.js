import React from 'react'

function Footer() {
    return ( 
       <footer> <h1 style = { headerStyle } > Made with <span style={{color: '#e25555'}}>&#9829;</span>  by Nirav Patel < /h1> </footer>
    );
}

const headerStyle = {
    position : 'absolute',
    background : 'rgb(228, 247, 245)',
    bottom : 0,
    width: '100%',
    height: '2.5rem',
    textAlign : 'center'
}

export default Footer;