import { useState, useEffect } from 'react';

export const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log(searchValue);
  }, [searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const resetSearchValue = () => {
    setSearchValue('');
  };

  return (
    <>
      <div className='relative  flex'>
        <label htmlFor='Search' className='sr-only'>
          Search
        </label>

        <input
          type='text'
          id='Search'
          placeholder='Search for...'
          className='w-full rounded-md p-2 pe-10 shadow-sm max-md:text-xs text-sm border border-gray-200'
          value={searchValue}
          onChange={handleInputChange}
        />

        <span className='absolute inset-y-0 end-0 grid w-10 place-content-center'>
          <button type='button' className='text-gray-600 hover:text-gray-700'>
            <span className='sr-only'>Search</span>

            {searchValue ? (
              <button
                onClick={resetSearchValue}
                className='flex items-center justify-center '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
            )}
          </button>
        </span>
      </div>
      {data.length < 0 && (
        <div className='bg-[#f1f1f1] fixed left-0 top-32 w-full h-80 p-5 lg:hidden overflow-y-auto'>
          <ul class='space-y-4'>
            <li class='flex items-center gap-4'>
              <img
                src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
                alt=''
                class='h-16 w-16 rounded object-cover'
              />
              <div className='flex items-center justify-between w-full'>
                <div>
                  <h3 class='text-sm text-gray-900'>Basic Tee 6-Pack</h3>

                  <div class='mt-0.5 space-y-px text-[10px] text-gray-600'>
                    $5000
                  </div>
                </div>
                <button className='text-sm border px-2 py-1 rounded border-black'>
                  Add cart
                </button>
              </div>
            </li>
            <li class='flex items-center gap-4'>
              <img
                src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
                alt=''
                class='h-16 w-16 rounded object-cover'
              />
              <div className='flex items-center justify-between w-full'>
                <div>
                  <h3 class='text-sm text-gray-900'>Basic Tee 6-Pack</h3>

                  <div class='mt-0.5 space-y-px text-[10px] text-gray-600'>
                    $5000
                  </div>
                </div>
                <button className='text-sm border px-2 py-1 rounded border-black'>
                  Add cart
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
