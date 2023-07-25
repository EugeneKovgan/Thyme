import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Navbar } from '@components/index';

export const MainLayout: FC = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
