import React from 'react';

const SearchButton = () => {
  const buttonStyles = {
    background: 'white',
    width: '190px',
    height: '45px',
    borderRadius: '10px',
    marginLeft: '20px',
    color: 'rgba(3, 102, 214, 0.8)',
  };

  return (
    <button style={buttonStyles}>
      Найти билеты
    </button>
  );
}

export default SearchButton;
