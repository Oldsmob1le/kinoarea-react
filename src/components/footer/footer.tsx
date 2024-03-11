"use client";
import React from 'react';

const footer = () => {
    return (
        <>
            <div className="text-gray-text flex flex-col items-center gap-s">
                <div className="text-white flex flex-col gap-4 mobile:flex-row mobile:gap-l">
                    <a href="#">Афиша</a>
                    <a href="#">Новости</a>
                    <a href="#">Персоны</a>
                    <a href="#">Рейтинги</a>
                    <a href="#">Рецензии</a>
                    <a href="#">Каталог фильмов</a>
                </div>
                <p>2024 © Kinoarea.  Все права защищены</p>
                <a href="#" className='underline underline-offset-2'>Политика конфиденциальности</a>
            </div>
        </>
    )
}

export default footer