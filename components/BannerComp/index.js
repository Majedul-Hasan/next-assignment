import React from 'react';
import styles from './BannerComp.module.css';
import BannerLeft from './BannerLeft';

const BannerComp = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerFlex}>
        <BannerLeft />

        <div className='bannerRight'></div>
      </div>
    </div>
  );
};

export default BannerComp;
