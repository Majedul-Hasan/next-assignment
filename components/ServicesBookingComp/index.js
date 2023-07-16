import React from 'react';
import BtnComp from '../BtnComp';
import styles from './ServicesBookingComp.module.css';
import SectionHeader from '../SectionHeader';

const ServicesBookingComp = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.BookingContainer}>
        <div className={styles.innerBody}>
          <SectionHeader>Innovate. Validate. Launch</SectionHeader>
          <p className={styles.sectionIntro}>
            Let‘s transform your idea into reality with our MVP development
            services.
          </p>
        </div>
        <div className={styles.btnContainer}>
          <BtnComp
            sowIcon={false}
            text={'Book a free consultation!'}
            bg={'linear-gradient(145deg,#dd0255,  #441fff)'}
            border={'2px solid #5e76fd'}
            color={'white'}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesBookingComp;
