import Image from 'next/image';
import React from 'react';
import styles from './ServicesComp.module.css';
import Link from 'next/link';

const Card = ({ src, text, link }) => {
  return (
    <div className={styles.card}>
      {/* <Image
        height={250}
        width={260}
        src={src}
        alt=''
      /> */}
      <img
        src={src}
        alt=''
      />

      <h2 className={styles.techName}>{text}</h2>
      <Link
        className={styles.link}
        href={link}>
        Get Started
      </Link>
    </div>
  );
};

export default Card;
