"use client";
import React from 'react';

const footer = () => {
    return (
        <>
            <div className="text-slate-500 flex flex-col items-center gap-4">
                <div className="text-white flex flex-col gap-4 md:flex-row md:gap-6">
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