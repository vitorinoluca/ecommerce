import { MenuProvider } from './MenuContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Landing } from './components/Landing.jsx';
import { Footer } from './components/ui/Footer.jsx';
import { Error404 } from './components/ui/Error404.jsx';
import { Filter } from './components/ui/Filter.jsx';

export const App = () => {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/t-shirts' element={<Filter />} />
          <Route path='/pants' element={<Filter />} />
          <Route path='/jackets' element={<Filter />} />
          <Route path='/trainers' element={<Filter />} />
          <Route path='/products' element={<Filter />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </MenuProvider>
    </BrowserRouter>
  );
};
