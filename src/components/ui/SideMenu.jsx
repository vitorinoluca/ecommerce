import { Link } from 'react-router-dom';
import { Menu } from '../svg/Menu';
import { useContext } from 'react';
import { MenuContext } from '../../MenuContext';
import { Search } from './Search';
export const SideMenu = () => {
  const { menu, setMenu, routes } = useContext(MenuContext);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className='flex-col justify-between border-e bg-white fixed top-0 left-0 lg:hidden z-50 shadow-md'>
        <div className='p-5 w-screen flex flex-col gap-5'>
          <div className='flex gap-5 items-center'>
            <button onClick={handleMenu} className=' lg:hidden'>
              <Menu />
            </button>
            <Link to='/'>
              <span className='text-2xl font-semibold'>Ecommerce</span>
            </Link>
          </div>
          <Search />
          <ul className='space-y-1'>
            <li>
              <Link
                to='/'
                className='block rounded-lg hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'
              >
                Home
              </Link>
            </li>

            <li>
              <details className='group [&_summary::-webkit-details-marker]:hidden'>
                <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                  <span className='text-sm font-medium'> Products </span>

                  <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </summary>

                <ul className='mt-2 space-y-1 px-4'>
                  {routes.map((route) => {
                    return (
                      <li key={route.path}>
                        <Link
                          className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                          to={route.path}
                        >
                          {route.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>

            <li>
              <Link
                to='/contact'
                className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
