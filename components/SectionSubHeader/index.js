import React from 'react';
import styles from './SectionSubHeader.module.css';

const SectionSubHeader = ({ children }) => {
  return <p className={styles.serviceDetail}>{children}</p>;
};

export default SectionSubHeader;
