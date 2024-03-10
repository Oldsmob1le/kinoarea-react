import React from 'react';
import { LogoIcon } from '@/ui/icons';
import ButtonHeader from "./button";

const headerStyle = {
    color: 'white',
    fontSize: '17px',
    lineHeight: '21px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: '90px',
    fontWeight: '600',
    letterSpacing: '0.5px',
};

const Header = () => {
    return (
        <div style={headerStyle}>
            <div>
                <LogoIcon />
            </div>
            <div className='flex gap-[35px] text-[17px]'>
                <a href="#">Афиша</a>
                <a href="#">Медиа</a>
                <a href="#">Фильмы</a>
                <a href="#">Актеры</a>
                <a href="#">Новости</a>
                <a href="#">Подборки</a>
                <a href="#">Категории</a>
            </div>
            <div>
                <ButtonHeader />
            </div>
        </div>
    );
};



export default Header;
