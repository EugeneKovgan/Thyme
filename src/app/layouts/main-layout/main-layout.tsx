import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Content, Footer, Header, Navbar } from '@components/index';

export const MainLayout: FC = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Navbar />
        <Content />
        <Footer />
      </div>
      <Outlet />;
    </>
  );
};
