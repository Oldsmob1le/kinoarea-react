'use client';
'use client';
import { LogoIcon, MenuIcon, UserIcon } from '@/ui/icons'; // Assuming there's an icon component for the user account
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

      <div style={logoStyle}>
        <LogoIcon />
        <p>Sky Bridge</p>
      </div>

      <div className="hidden tablet:flex items-center gap-xl text-h1">
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
        {/* Add the user account icon here */}
      </div>

      <div className={`flex tablet:hidden items-end mr-3xl  ${isMenuOpen ? 'flex-col' : 'hidden'}`}>
        <a href="#" className="mb-xs">Билеты</a>
        <a href="#" className="mb-xs">Услуги</a>
        <a href="#" className="mb-xs">О нас</a>
        <a href="#" className="mb-xs">Маршруты</a>
        <a href="#" className="mb-xs">Расписание рейсов</a>
        <a href="#" className="mb-xs">Личный кабинет</a>
      </div>
    </div>
  )
}

export default Header;