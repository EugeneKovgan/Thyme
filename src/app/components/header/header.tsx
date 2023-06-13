import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../../assets/images/img/avatar.jpg';
import logo from '../../../assets/images/svg/logo_thyme.svg';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <NavLink to="#">
          <img className={styles.logo} src={logo} alt="logo" />
        </NavLink>
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </div>
    </header>
  );
};
