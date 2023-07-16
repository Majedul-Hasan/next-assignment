import React from 'react';
import styles from './BannerComp.module.css';
import BannerLeft from './BannerLeft';
import BannerRight from './BannerRight';

const BannerComp = () => {
  return (
    <section className={styles.sectionHolder}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerFlex}>
          <BannerLeft />
          <BannerRight />
        </div>
      </div>
    </section>
  );
};

export default BannerComp;
