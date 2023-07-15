import React from 'react';
import styles from './BannerComp.module.css';

const BannerRight = () => {
  return (
    <div className={styles.bannerRight}>
      <div className={styles.boxCont}>
        <div className={styles.box}>
          <div className={`${styles.boxFace} ${styles.front} `}></div>
          <div className={`${styles.boxFace} ${styles.back} `}></div>
          <div className={`${styles.boxFace} ${styles.left} `}></div>
          <div className={`${styles.boxFace} ${styles.right} `}></div>
          <div className={`${styles.boxFace} ${styles.top} `}></div>
          <div className={`${styles.boxFace} ${styles.bottom} `}></div>
        </div>
      </div>
    </div>
  );
};

export default BannerRight;
