import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Content } from '@components/content';
import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <Content /> }],
  },
]);
