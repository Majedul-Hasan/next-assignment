import React from 'react';
import Card from './Card';
import data from '@/data/services.json';
import styles from './ServicesComp.module.css';
import SectionHeader from '../SectionHeader';
import SectionSubHeader from '../SectionSubHeader';

const ServicesComp = () => {
  return (
    <section className={styles.servicesContainer}>
      <SectionHeader>
        Customised Solutions for All Your Business Needs
      </SectionHeader>
      <SectionSubHeader>
        Take Your Business to the Next Level with Our Industry-Leading Services
      </SectionSubHeader>
     

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
