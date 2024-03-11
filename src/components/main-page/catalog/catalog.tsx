"use client";
import React from 'react';
import Image from 'next/image';
import { Banner } from '@/ui/icons';
import ButtonFooter from '@/components/footer/button';

const catalogMain = () => {
    return (
        <>
            <div className="flex flex-col justify-between w-full">
                <Image className="z-[-100]"
                    src={Banner}
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />

                <div className="mt-5xl text-white font-semibold flex items-center justify-between w-full">
                    <div className="text-display-4">
                    <h1>Сейчас в кино</h1>
                    </div>
                    <div className="w-[51px] h-0 border-2 border-white "></div>
                    <div className="flex gap-2xl text-gray-text" style={{ letterSpacing: '1px' }}>
                    <a href="#" className="text-white">Все</a>
                    <a href="#">Боевики</a>
                    <a href="#">Приключения</a>
                    <a href="#">Комедии</a>
                    <a href="#">Фантастика</a>
                    <a href="#">Триллеры</a>
                    <a href="#">Драма</a>
                    </div>
                </div>

                <div className="text-center">
                    <ButtonFooter />
                </div>
                        </div>
        </>
    )
}

export default catalogMain