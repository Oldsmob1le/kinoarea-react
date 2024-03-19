import React from 'react';

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  const buttonStyles = {
    background: 'white',
    width: '190px',
    height: '45px',
    borderRadius: '10px',
    marginLeft: '20px',
    color: 'rgba(3, 102, 214, 0.8)',
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      Найти билеты
    </button>
  );
};

export default SearchButton;