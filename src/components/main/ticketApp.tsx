'use client';
import React, { useEffect, useState } from 'react';
import Search from './search';
import { Tickets } from '@/ui/icons';

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
      console.error('Билеты не найдены:', error);
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


  const inputStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    background: 'rgb(241, 249, 252, 0.9)',
    opacity: '0.9',
  };

  return (
    <div>
      <Search onSearch={handleSearch} /> 
      {searchPerformed ? (
        ticket ? ( 
            <div key={ticket.flight_number} style={inputStyle} className=' max-w-[1000px] max-h-[600px] h-[200px] m-auto p-l'>
              <div className="flex items-center">
              <div className="flex flex-col items-center">
              <p>{ticket.departure_time}</p>
              <p>{ticket.origin}</p>
              <p>{searchParams.date}</p>
              </div>
              <div className="mb-4xl">
                <Tickets />
              </div>
              <div className="flex flex-col items-center">
              <p>{ticket.arrival_time}</p>
              <p>{ticket.destination}</p>
              <p>{searchParams.date}</p>
              </div>
              <div className="flex items-center">
              <div className="bg-gray-3 h-[200px] w-[2px]"></div>
                <div className="flex flex-col items-center justify-center">
                  <p>{ticket.price}</p>
                  <p>{searchParams.passengers}</p>
                </div>
              </div>
              </div>
              </div>
        ) : (
          <p>Нет доступных билетов</p>
        )
      ) : null}
    </div>
  );
};

export default TicketApp;
