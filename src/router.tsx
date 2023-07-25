import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <div>empty</div> },
      { path: 'profile', element: <div>profile</div> },
      { path: 'messages', element: <div>messages</div> },
      { path: 'map', element: <div>map</div> },
    ],
  },
]);
