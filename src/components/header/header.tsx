'use client';
import { LogoIcon, MenuIcon, UserIcon } from '@/ui/icons';
import React, { useState } from 'react';
import Image from 'next/image';
import { Banner } from '@/ui/icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '1px',
    fontWeight: '500',
    fontSize: '1.4em',
    marginLeft: '2px',
    cursor: 'pointer',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-gray-1 flex flex-col tablet:flex-row w-full justify-between mt-xl">

      <Image
        className="z-[-1]"
        src={Banner}
        alt="Banner"
        layout="responsive"
        objectFit="cover"
        objectPosition="center"
        style={{
          position: 'absolute',
          width: '100%',
          height: '375px',
          left: '-1px',
          right: '-113.21px',
          top: '-15px',
        }}
      />

      <div style={logoStyle} className='px-xl'>
        <LogoIcon />
        <p>Sky Bridge</p>
      </div>

      <div className="hidden tablet:flex items-center gap-xl text-h1 px-xl">
        <a href="#">Билеты</a>
        <a href="#">Расписание рейсов</a>
        <a href="#">Услуги</a>
        <a href="#">О нас</a>
        <a href="#">Маршруты</a>
        <a href="#">Личный кабинет</a>
      </div>

      <div className="tablet:hidden absolute top-7 right-7 flex items-center gap-xs">
      <UserIcon />
        <button onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>

      <div className={`flex text-h1 tablet:hidden items-end mr-4xl  ${isMenuOpen ? 'flex-col' : 'hidden'}`}>
        <a href="#" className="mb-m mt-3xl">Билеты</a>
        <a href="#" className="mb-m">Услуги</a>
        <a href="#" className="mb-m">О нас</a>
        <a href="#" className="mb-m">Маршруты</a>
        <a href="#" className="mb-m">Расписание рейсов</a>
      </div>
    </div>
  )
}

export default Header;