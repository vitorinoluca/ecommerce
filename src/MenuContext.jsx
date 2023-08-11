import { createContext, useEffect, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const routes = [
    {
      path: '/t-shirts',
      label: 'T-shirts',
    },
    {
      path: '/pants',
      label: 'Pants',
    },
    {
      path: '/jackets',
      label: 'Jackets',
    },
    {
      path: '/trainers',
      label: 'Trainers',
    },
    {
      path: '/products',
      label: 'All products',
    },
  ];
  const values = { menu, setMenu, routes };

  return (
    <>
      <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
    </>
  );
};
