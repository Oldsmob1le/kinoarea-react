'use client';
import React, { useEffect, useState } from 'react';
import Search from './search';

const TicketApp = () => {
  const [ticket, setTicket] = useState<any | null>(null);
  const [searchParams, setSearchParams] = useState<{
    origin: string;
    destination: string;
    date: string;
    passengers: number;
  }>({
    origin: '',
    destination: '',
    date: '',
    passengers: 0
  });
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);

  const fetchTickets = async (origin: string, destination: string, date: string, passengers: number) => {
    try {
      const response = await fetch(`http://kinoarea-react/src/api/connect.php?origin=${origin}&destination=${destination}&date=${date}&passengers=${passengers}`);
      const data = await response.json();
      setTicket(data.find((ticket: any) => ticket.origin === origin && ticket.destination === destination)); // Находим первый билет, соответствующий параметрам
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleSearch = (origin: string, destination: string, date: string, passengers: number) => {
    setSearchParams({
      origin,
      destination,
      date,
      passengers
    });
    setSearchPerformed(true);
  };

  useEffect(() => {
    if (searchParams.origin && searchParams.destination && searchParams.date && searchParams.passengers) {
      fetchTickets(searchParams.origin, searchParams.destination, searchParams.date, searchParams.passengers);
    }
  }, [searchParams]);

  return (
    <div>
      <Search onSearch={handleSearch} /> 
      <h1 className='text-gray-3-lines'>Билеты</h1>
      {searchPerformed ? (
        ticket ? ( // Проверяем, есть ли выбранный билет
          <ul>
            <li key={ticket.flight_number}>
              <div>Номер рейса: {ticket.flight_number}</div>
              <div>Откуда: {ticket.origin}</div>
              <div>Куда: {ticket.destination}</div>
              <div>Время отправления: {ticket.departure_time}</div>
              <div>Время прибытия: {ticket.arrival_time}</div>
              <div>Цена: {ticket.price}</div>
            </li>
          </ul>
        ) : (
          <p>Нет доступных билетов</p>
        )
      ) : null}
    </div>
  );
};

export default TicketApp;
