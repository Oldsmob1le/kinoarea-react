'use client';
import React, { useEffect, useState } from 'react';
import Search from './main/search';
import { Tickets } from '@/ui/icons';
import moment from 'moment';
import TicketButton from './main/ticketButton';

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
            <div key={ticket.flight_number} style={inputStyle} className=' max-w-[1035px] max-h-[600px] h-[200px] m-auto'>
              <div className="flex items-center">
              <div className="flex flex-col items-center">
              <p className='text-display-2 font-semibold'>{ticket.departure_time}</p>
              <p style={{ color: 'rgba(3, 102, 214, 0.8)' }}>{moment(searchParams.date).format('DD MMMM')}</p>
              <p className='font-medium'>{ticket.origin}</p>
              </div>
              <div className="mb-3xl">
                <Tickets />
              </div>
              <div className="flex flex-col items-center">
              <p className='text-display-2 font-semibold'>{ticket.arrival_time}</p>
              <p style={{ color: 'rgba(3, 102, 214, 0.8)' }}>{moment(searchParams.date).format('DD MMMM')}</p>
              <p className='font-medium'>{ticket.destination}</p>
              </div>
              <div className="flex items-center">
              <div className="bg-gray-3 h-[200px] w-[2px]"></div>
                <div className="flex flex-col items-center justify-center" >
                  <div className='flex mb-l ml-l'>
                  <p className='text-display-2 font-semibold'>{ticket.price}</p>
                  <p className='mx-[2px]'>*</p>
                  <p style={{ color: 'rgba(3, 102, 214, 0.8)' }} className='font-medium'>{searchParams.passengers}</p>
                  </div>
                  <div>
                <TicketButton />
                </div>
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
