import React from 'react';
import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className={styles.Bar}>
      <NavLink className={styles.Link} to='/'>
        Home
      </NavLink>
      <NavLink className={styles.Link} to='/items/new'>
        Add New Item
      </NavLink>
    </nav>
  );
}

export default Nav;
