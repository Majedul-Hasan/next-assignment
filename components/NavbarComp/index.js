import React from 'react';
import styles from './NavbarComp.module.css';
import Image from 'next/image';

const NavbarComp = () => {
  return (
    <header className={styles.navbarCont}>
      <nav className={styles.navContent}>
        <Image
          src='/xzect-logo.svg'
          width={48}
          height={48}
          alt='logo'
          className={styles.logoImg}
        />
        <h2 className={styles.company}>Xzect</h2>
      </nav>
    </header>
  );
};

export default NavbarComp;
