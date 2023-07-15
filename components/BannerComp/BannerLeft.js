import React from 'react';
import styles from './BannerComp.module.css';
import BtnComp from '../BtnComp';

const BannerLeft = () => {
  const bannerSlog = [
    {
      w: ' Build,',
      sty: 'red',
    },
    {
      w: ' test, ',
      sty: 'blue',
    },
    {
      w: 'and,',
      sty: 'gay',
    },
    {
      w: ' execute your ideas ',
      sty: 'green',
    },
    {
      w: 'with our ',
      sty: 'gay',
    },
    {
      w: 'innovative solutions',
      sty: 'yellow',
    },
    {
      w: '.',
      sty: 'yellow',
    },
  ];
  return (
    <div className={styles.bannerLeft}>
      <h2 className={styles.tagLiner}>
        {bannerSlog.map((x, i) => (
          <span
            className={styles[x.sty]}
            key={i}>
            {x.w}
          </span>
        ))}
      </h2>
      <div className={styles.bannerBtnCont}>
        <BtnComp
          sowIcon={true}
          text={'Chat now on Whatsapp'}
          bg={'#075e54'}
          border={'2px solid #075e54'}
          color={'white'}
        />
        <BtnComp
          sowIcon={false}
          text={'Explore Our Service'}
          bg={'#1d2233'}
          border={'2px solid #5e76fd'}
          color={'white'}
        />
      </div>
    </div>
  );
};

export default BannerLeft;
