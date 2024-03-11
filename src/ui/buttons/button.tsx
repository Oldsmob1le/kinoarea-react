import React from 'react';

const buttonStyle = {
    width: '160px',
    height: '50px',
    borderRadius: '10px',
    background: 'transparent',
    border: '2px solid white',
    color: 'white',
    fontSize: '15px',
    lineHeight: '166.5%',
    fontWeight: '600',
    letterSpacing: '0.6px',
};

const ButtonFooter = () => {
    return (
        <button style={buttonStyle}>
            Все новинки
        </button>
    );
};

export default ButtonFooter;