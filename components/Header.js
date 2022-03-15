import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.tiile}>
        <span>Web Dev</span> News
      </h1>
      <p className={headerStyles.description}>Keep up to the date with the latest web dev news</p>
    </div>
  );
};

export default Header;
