'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { PopularImg } from '@/ui/icons';

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  text-align: center;
`;

const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { title: 'Грин Каньон', location: 'Анталия', price: 'от 12.000' },
    { title: 'Грин Каньон', location: 'Анталия', price: 'от 14.000' },
    { title: 'Грин Каньон', location: 'Анталия', price: 'от 16.000' },
  ];

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider-container">
      <h2>Популярные маршруты</h2>
      <div className="slider">
        <button onClick={handlePrevSlide}>&lt;</button>
        <SlideWrapper>
          <Image
            src={PopularImg}
            alt="PopularImg"
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
          <TextOverlay>
            <h3>{slides[currentIndex].title}</h3>
            <p>{slides[currentIndex].location}</p>
            <p>{slides[currentIndex].price}</p>
          </TextOverlay>
        </SlideWrapper>
        <button onClick={handleNextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Popular;
