import { LogoIcon } from '@/ui/icons'
import React from 'react'
import Image from 'next/image';
import { Banner } from '@/ui/icons';

const header = () => {

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1px',
    fontWeight: '500',
    fontSize: '1.4em',
    marginLeft: '2px',
    cursor: 'pointer',
  };

  return (
    <div className="text-gray-1 flex w-full justify-between mt-l">
      <div className="flex items-center">
        <LogoIcon />
        <p style={logoStyle}>Sky Bridge</p>
      </div>
      <div className="flex items-center gap-m text-h1">
        <a href="#">Билеты</a>
        <a href="#">Расписание рейсов</a>
        <a href="#">Услуги</a>
        <a href="#">О нас</a>
        <a href="#">Маршруты</a>
        <a href="#">Личный кабинет</a>
      </div>
    </div>
  )
}

export default header
