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
    <div className="text-gray-1 flex w-full justify-between mt-xl">

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
      
      <div style={logoStyle} >
        <LogoIcon />
        <p className='opacity-0 mobile:opacity-[1]'>Sky Bridge</p>
      </div>
      <div className="flex items-center mobile:gap-xl mobile:text-h1">
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
