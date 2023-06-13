import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './content.module.css';

export const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/profile" element={<div>profile</div>} />
        <Route path="/messages" element={<div>messages</div>} />
        <Route path="/map" element={<div>map</div>} />
      </Routes>
    </div>
  );
};
