import React from 'react';
import styles from './BannerComp.module.css';

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
    </div>
  );
};

export default BannerLeft;
