"use client";
import React from 'react';
import Image from 'next/image';
import { Banner } from '@/ui/icons';
import ButtonFooter from '@/components/footer/button';
import { Arrow  } from '@/ui/icons';

const newMain = () => {
    return (
        <>
          <div className="flex items-center justify-between">
            <div className="text-display-3 font-semibold text-white">
              <h2>Ожидаемые новинки</h2>
            </div>
            <div className="mt-s">
              <Arrow />
            </div>
          </div>
        </>
    )
}

export default newMain