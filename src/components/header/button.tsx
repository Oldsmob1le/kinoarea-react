import React from 'react';

const buttonStyle = {
  width: '139px',
  height: '53px',
  borderRadius: '10px',
  boxShadow: '0px 0px 15px 0px rgba(54, 87, 203, 0.8)',
  background: 'rgb(54, 87, 203)',
  color: 'white',
  fontSize: '16px',
  lineHeight: '166.5%',
};

const ButtonHeader = () => {
  return (
    <button style={buttonStyle}>
      Войти
    </button>
  );
};

export default ButtonHeader;
