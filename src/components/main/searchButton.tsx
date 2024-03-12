import React from 'react';

const SearchButton = () => {
  const buttonStyles = {
    background: 'white',
    width: '190px',
    height: '40px',
    borderRadius: '10px',
    marginLeft: '30px',
    marginRight: '30px',
  };

  return (
    <button style={buttonStyles}>
      Найти билеты
    </button>
  );
}

export default SearchButton;
