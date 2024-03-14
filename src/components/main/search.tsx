'use client';
import React, { useState } from 'react';
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

const optionsFrom = [
  { value: 'city1', label: 'Город 1' },
  { value: 'city2', label: 'Город 2' },
];

const optionsTo = [
  { value: 'cityA', label: 'Город A' },
  { value: 'cityB', label: 'Город B' },
];

const passengerOptions = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
];

const Search = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPassengers, setSelectedPassengers] = useState<{ value: number; label: string } | null>(null);

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
      />

        <Select
          className=''
          options={optionsTo}
          placeholder='Куда'
          styles={selectStyles}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
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