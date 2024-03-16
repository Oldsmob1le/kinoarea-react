import Search from '@/components/main/search';
import React from 'react';
import Popular from '@/components/main/slider/popular';
import Ticket from '@/components/main/ticket';

export default function Home() {
  return (
      <>
        <Search />
        <Ticket />
      </>
  );
}