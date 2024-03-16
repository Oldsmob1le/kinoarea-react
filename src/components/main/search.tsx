'use client';
// В компоненте Search
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Shuffle } from '@/ui/icons';
import SearchButton from './searchButton';

const CustomDropdownIndicator = (props: any) => {
  if (props.selectProps.name === 'from' && props.selectProps.inputId === 0) {
    return <Shuffle style={{ marginLeft: '-40px', marginTop: '2px' }} />;
  }
  return null;
};

const Search = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPassengers, setSelectedPassengers] = useState<{ value: number; label: string } | null>(null);
  const [optionsFrom, setOptionsFrom] = useState<any[]>([]);
  const [optionsTo, setOptionsTo] = useState<any[]>([]);
  const [passengerOptions, setPassengerOptions] = useState<any[]>([]);

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      const fromResponse = await fetch('http://kinoarea-react/src/api/get_destination_options.php');
      const fromData = await fromResponse.json();
      setOptionsFrom(fromData);

      const toResponse = await fetch('http://kinoarea-react/src/api/get_destination_options.php');
      const toData = await toResponse.json();
      setOptionsTo(toData);

      const passengersResponse = await fetch('http://kinoarea-react/src/api/get_passenger_options.php');
      const passengersData = await passengersResponse.json();
      setPassengerOptions(passengersData);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const inputStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    background: 'rgb(241, 249, 252, 0.7)',
    opacity: '0.9',
  };

  const inputFieldStyle = {
    margin: '10px',
    padding: '10px',
    paddingLeft: '15px',
    borderRadius: '10px',
    border: 'none',
  };

  const selectStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      width: '190px',
      height: '44px',
      margin: '8px',
      cursor: 'text',
      border: 'none',
      borderRadius: '10px',
      boxShadow: state.isFocused ? 'none' : 'none',
      '&:hover': {
        border: 'none',
      },
    }),
    menuIsOpen: (provided: any) => ({
      ...provided,
      boxShadow: 'none',
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    placeholder: (provided: any) => ({
      ...provided,
      marginLeft: '10px',
    }),
  };

  return (
    <div className='mt-5xl px-l '>
      <h2 className='text-gray-1 text-display-2 font-semibold'>Поиск билетов</h2>
      <div style={{ ...inputStyle, margin: '20px auto' }} className='pr-[40px] pl-[35px] max-w-[1300px] h-[120px] '>
        <Select
          options={optionsFrom}
          placeholder='Откуда'
          styles={selectStyles}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
          name='from'
          inputId={'0'}
          onChange={(option: any) => setOrigin(option.value)}
        />

        <Select
          className=''
          options={optionsTo}
          placeholder='Куда'
          styles={selectStyles}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
          onChange={(option: any) => setDestination(option.value)}
        />
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date)}
          placeholderText='Даты'
          dateFormat='dd.MM.yyyy'
          customInput={<input style={inputFieldStyle} className='outline-0' />}
        />
        <Select
          options={passengerOptions}
          placeholder='Пассажиры'
          styles={selectStyles}
          value={selectedPassengers}
          onChange={(selectedOption) => setSelectedPassengers(selectedOption)}
        />
        <SearchButton />
      </div>
    </div>
  );
};

export default Search;