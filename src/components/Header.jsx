import { Profile } from './svg/Profile.jsx';
import { Bag } from './svg/Bag.jsx';
import { Search } from './ui/Search.jsx';
import { Link } from 'react-router-dom';
import { Menu } from './svg/Menu.jsx';
import { SideMenu } from './ui/SideMenu.jsx';
import { useContext, useState } from 'react';
import { MenuContext } from '../MenuContext.jsx';
export const Header = () => {
  const { menu, setMenu, routes } = useContext(MenuContext);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className='shadow-sm bg-white z-50 fixed top-0 left-0 w-full'>
        <div className='flex items-center justify-between max-w-5xl mx-auto p-5'>
          <div className='flex gap-5 items-center'>
            <button onClick={handleMenu} className='lg:hidden'>
              <Menu />
            </button>
            <Link to='/'>
              <span className='text-2xl font-semibold'>Ecommerce</span>
            </Link>
          </div>
          <nav className='max-lg:hidden'>
            <ul className='flex items-center gap-5 text-gray-500 text-sm'>
              {routes.map((route) => {
                return (
                  <li key={route.path} className='[&>a]:hover:underline'>
                    <Link to={route.path}>{route.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className='flex items-center gap-5'>
            <div className='max-lg:hidden'>
              <Search />
            </div>
            <Bag />
            <Profile />
          </div>
        </div>
      </header>
      {menu && <SideMenu />}
    </>
  );
};
