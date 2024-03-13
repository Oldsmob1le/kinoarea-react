'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { PopularImg } from '@/ui/icons';

const SlideWrapper = styled.div`
  position: relative;
  width: ${({ isCenter }) => (isCenter ? 'calc(100% / 3.5)' : 'calc(100% / 4)')};
  height: auto;
  filter: ${({ isCenter }) => (isCenter ? 'none' : 'blur(4px)')};
  opacity: ${({ isCenter }) => (isCenter ? '1' : '0.5')};
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 86%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 20px;
  text-align: center;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1px;
`;

const SliderControls = styled.div`
  display: flex;
  margin: 0 10px;
`;

const SliderButton = styled.button`
  background: none;
  border: none;
  font-size: 35px;
  cursor: pointer;
`;

const PrevButton = styled(SliderButton)`
  margin-left: -20px;
`;

const NextButton = styled(SliderButton)`
  margin-left: -20px;
`;


const Popular = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { title: 'Грин Каньон', location: 'Анталия', price: 'от 12.000' },
    { title: 'Грин Каньон', location: 'Анталия', price: 'от 14.000' },
    { title: 'Грин Каньон', location: 'Анталия', price: 'от 16.000' },
  ];

  useEffect(() => {
    setCurrentIndex(Math.floor(slides.length / 2));
  }, []);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const getSlideIndex = (offset) => {
    const newIndex = currentIndex + offset;
    if (newIndex < 0) {
      return slides.length + newIndex;
    } else if (newIndex >= slides.length) {
      return newIndex - slides.length;
    } else {
      return newIndex;
    }
  };

  return (
    <div className="slider-container text-white mt-section">
      <h2 className='text-display-2 font-semibold'>Популярные маршруты</h2>
      <div className="slider">
        <SliderControls>
          <PrevButton onClick={handlePrevSlide}>&lt;</PrevButton>
          <SliderContainer>
            {[-1, 0, 1].map((offset) => {
              const slideIndex = getSlideIndex(offset);
              const isCenter = offset === 0;
              return (
                <SlideWrapper key={slideIndex} isCenter={isCenter}>
                  <Image
                    src={PopularImg}
                    alt="PopularImg"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <TextOverlay>
                    <h3>{slides[slideIndex].title}</h3>
                    <p>{slides[slideIndex].location}</p>
                    <p>{slides[slideIndex].price}</p>
                  </TextOverlay>
                </SlideWrapper>
              );
            })}
          </SliderContainer>
          <NextButton onClick={handleNextSlide}>&gt;</NextButton>
        </SliderControls>
      </div>
    </div>
  );
};

export default Popular;
