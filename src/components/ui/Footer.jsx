import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className=''>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link to='/'>
            <span className='text-2xl font-semibold'>Ecommerce</span>
          </Link>

          <p className='mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right'>
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
