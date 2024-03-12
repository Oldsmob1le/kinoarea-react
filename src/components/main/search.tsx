"use client";
import React from 'react';
import Image from 'next/image';
import { Banner } from '@/ui/icons';
import ButtonFooter from '@/ui/buttons/button';

const catalogMain = () => {
    return (
        <>
            <div className="">
                <h2>Поиск билетов</h2>
                <div className="">
                    <input type="checkbox" id="" placeholder='Откуда'/> 
                    <input type="checkbox" id="" placeholder='Куда'/> 
                    <input type="checkbox" id="" placeholder='Даты'/> 
                    <input type="checkbox" id="" placeholder='Пассажиры'/> 
                </div>
            </div>    
        </>
    )
}

export default catalogMain