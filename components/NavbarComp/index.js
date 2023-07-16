import React, { useState } from 'react';
import styles from './NavbarComp.module.css';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import MainNav from '../MainNav';

const NavbarComp = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className={styles.navbarCont}>
        <nav className={styles.navContent}>
          <div className={styles.navLeftItems}>
            <Image
              src='/xzect-logo.svg'
              width={48}
              height={48}
              alt='logo'
              className={styles.logoImg}
            />
            <h2 className={styles.company}>Xzect</h2>
          </div>
          <div
            className={styles.hamburgerMenu}
            onClick={() => setOpen((x) => !x)}>
            {isOpen ? <GrClose /> : <GiHamburgerMenu />}
          </div>
        </nav>
      </header>
      {isOpen && <MainNav />}
    </>
  );
};

export default NavbarComp;
