'use client';
import React, { useState } from 'react';
import Select, { components } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Shuffle } from '@/ui/icons';
import SearchButton from './searchButton';

const CustomDropdownIndicator = (props: any) => {
  if (props.selectProps.name === 'from' && props.selectProps.inputIndex === 0) {
    return <Shuffle style={{ marginLeft: '-20px' }} />;
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

const Search = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const inputStyle = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '20px',
    background: 'rgb(241, 249, 252)',
    opacity: '0.89',
    maxWidth: '1300px',
    height: '120px',
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
    <div className=''>
      <h2>Поиск билетов</h2>
      <div style={{ ...inputStyle, margin: '20px auto' }} className='pr-[30px] pl-[20px]'>
        <Select
          options={optionsFrom}
          placeholder='Откуда'
          styles={selectStyles}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
          name='from'
          inputIndex={0}
        />
        <Select
          options={optionsTo}
          placeholder='Куда'
          styles={selectStyles} // Применяем стили к этому компоненту
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
        <input
          type='number'
          id='passengers'
          placeholder='Пассажиры'
          min='0'
          step='1'
          style={inputFieldStyle} className='outline-0'

        />
        <SearchButton />
      </div>
    </div>
  );
};

export default Search;