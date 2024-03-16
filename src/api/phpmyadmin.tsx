import React, { useEffect, useState } from 'react';

const TicketApp: React.FC = () => {
  const [tickets, setTickets] = useState<Array<{
    flight_number: string,
    destination: string,
    origin: string,
    departure_time: string,
    arrival_time: string,
    price: number
  }>>([]);

  const fetchTickets = async (origin: string, destination: string, date: string, passengers: number) => {
    try {
      const url = `http://kinoarea-react/src/api/connect.php?origin=${origin}&destination=${destination}&date=${date}&passengers=${passengers}`;
      const response = await fetch(url);
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  useEffect(() => {
    fetchTickets('', '', '', 0);
  }, []);

  return (
    <div>
      <h1 className='text-slate-600'>Билеты</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.flight_number}>
            <div>Номер рейса: {ticket.flight_number}</div>
            <div>Откуда: {ticket.origin}</div>
            <div>Куда: {ticket.destination}</div>
            <div>Время отправления: {ticket.departure_time}</div>
            <div>Время прибытия: {ticket.arrival_time}</div>
            <div>Цена: {ticket.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketApp;