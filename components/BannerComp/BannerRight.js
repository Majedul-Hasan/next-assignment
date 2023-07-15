import React from 'react';
import styles from './BannerComp.module.css';

const BannerRight = () => {
  return (
    <div className={styles.bannerRight}>
      <div className={styles.boxCont}>
        <div class={styles.box}>
          <div class={`${styles.boxFace} ${styles.front} `}></div>
          <div class={`${styles.boxFace} ${styles.back} `}></div>
          <div class={`${styles.boxFace} ${styles.left} `}></div>
          <div class={`${styles.boxFace} ${styles.right} `}></div>
          <div class={`${styles.boxFace} ${styles.top} `}></div>
          <div class={`${styles.boxFace} ${styles.bottom} `}></div>
        </div>
      </div>
    </div>
  );
};

export default BannerRight;
