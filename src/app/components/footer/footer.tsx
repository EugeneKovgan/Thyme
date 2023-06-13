import React from 'react';
import { NavLink } from 'react-router-dom';
import logo_git from '../../../assets/images/svg/eva_github-outline.svg';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          Thyme © 2022
          <br /> Designed by Eugene Kovgan
        </p>
        <NavLink target="_blank" to="https://github.com/EugeneKovgan">
          <img className="svg-scale" src={logo_git} alt="logo_git" />
        </NavLink>
      </div>
    </footer>
  );
};
