import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const navItems = ["Home", "About Me", "Tech Stack", "Contact Me"];

  return (
    <nav className="flex justify-between items-center">
      <h1 className="p-2 ml-10 md:ml-6 xl:ml-[200px] sm:text-lg xl:text-xl text-lg font-bold cursor-pointer text-[#E0E0E0]">
        Logo
      </h1>
      <ul className="flex gap-2 p-3 sm:mr-6 xl:mr-[200px] mr-10 sm:text-lg xl:text-xl text-lg font-bold">
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <span className={styles.bgFill}></span>
            <span className={styles.navText}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;