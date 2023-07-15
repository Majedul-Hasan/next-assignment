import React from 'react';
import Card from './Card';
import data from '@/data/services.json';
import styles from './ServicesComp.module.css';

const ServicesComp = () => {
  return (
    <section className={styles.servicesContainer}>
      <h2 className={styles.serviceHeading}>
        Customised Solutions for All Your Business Needs
      </h2>

      <p className={styles.serviceDetail}>
        Take Your Business to the Next Level with Our Industry-Leading Services
      </p>

      <div className={styles.cardContainer}>
        {data.map((e, i) => (
          <Card
            key={i}
            {...e}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesComp;
