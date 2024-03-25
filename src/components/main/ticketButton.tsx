import React from 'react';
import Link from 'next/link';

// interface ticketButtonProps {
//   onClick: () => void;
// }

// const TicketButton: React.FC<ticketButtonProps> = ({ onClick }) => {
const TicketButton = () => {
  const buttonStyles = {
    background: 'white',
    width: '165px',
    height: '45px',
    borderRadius: '10px',
    marginLeft: '20px',
    color: 'rgba(3, 102, 214, 0.8)',
    fontWeight: '500',
    fontSize: '1.2em',
  };

  return (
    <Link href="/ticketPlace">
        <button style={buttonStyles}>
          Купить
        </button>
  </Link>

  );
};

export default TicketButton;