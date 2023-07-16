import React from 'react';
import SectionHeader from '../SectionHeader';
import SectionSubHeader from '../SectionSubHeader';
import styles from './ExpertiseComp.module.css';
import BtnComp from '../BtnComp';
import data from '@/data/techs.json';
import TechCardComp from './TechCardComp';

const ExpertiseComp = () => {

  return (
    <section className={styles.expertise}>
      <SectionHeader>
        <span style={{ color: '#000' }}>
          Leverage our software & hardware expertise
        </span>
      </SectionHeader>
      <SectionSubHeader>
        {' '}
        <span style={{ color: '#000' }}>
          Use our services and tech expertise to create disruptive products &
          solutions that can revolutionize your business and stay ahead with
          evolving technological advancements.
        </span>
      </SectionSubHeader>
      {/*  */}
      <div className={styles.techStackContainer}>
        {data.map((e, i) => (
          <TechCardComp
            key={i}
            {...e}
          />
        ))}
      </div>

      <div className={styles.btnCoverExpertise}>
        <BtnComp
          sowIcon={false}
          text={'Explore Our Entire Tech Stack'}
          bg={''}
          border={'1px solid #ff5f08'}
          color={'#ff5f08'}
        />
      </div>
    </section>
  );
};

export default ExpertiseComp;
