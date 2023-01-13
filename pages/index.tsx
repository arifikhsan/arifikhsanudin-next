import { useState, useEffect } from 'react';
import DefaultLayout from '../components/layout/default-layout';

export default function Home() {
  return (
    <DefaultLayout>
      <div className='font-display py-16 md:py-32 md:text-center'>
        <h1 className='text-3xl font-black'>Hello, my name is <span className='text-green-500'>Arif</span></h1>
        <p className='mt-4 text-5xl font-black leading-tight'>
          I am a <span className='text-green-500'>Software Engineer</span>
        </p>
      </div>
    </DefaultLayout>
  );
}
