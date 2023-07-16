import Image from 'next/image';
import React from 'react';
import styles from './ExpertiseComp.module.css';

const TechCardComp = ({ text, src }) => {
  return (
    <div className={styles.techCard}>
      <Image
        width={32}
        height={32}
        src={src}
        alt=''
      />

      <div style={{ fontSize: '1.25rem' }}>{text}</div>
    </div>
  );
};

export default TechCardComp;
