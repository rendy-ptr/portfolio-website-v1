import React from "react";
import styles from "./Navbar.module.css";
import { NAVBAR } from "../../constant/index";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      {/* Gunakan container dengan lebar maksimal yang sama seperti di App.tsx */}
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center py-4">
        <h1 className="sm:text-lg xl:text-xl text-lg font-bold cursor-pointer text-[#E0E0E0]">
          {NAVBAR.TITLE}
        </h1>
        <ul className="flex gap-2 p-3 sm:text-lg xl:text-xl text-lg font-bold">
          {NAVBAR.TEXT.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <span className={styles.bgFill}></span>
              <span className={styles.navText}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
