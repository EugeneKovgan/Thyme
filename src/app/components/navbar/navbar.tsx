import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.scss';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_list__item}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className={styles.nav_list__item}>
          <NavLink to="/messages">Messages</NavLink>
        </li>
        <br />
        <li className={styles.nav_list__item}>
          <NavLink to="/map">Map</NavLink>
        </li>
      </ul>
    </nav>
  );
};
