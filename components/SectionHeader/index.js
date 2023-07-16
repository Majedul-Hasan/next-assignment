import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ children }) => {
  return <h2 className={styles.serviceHeading}>{children}</h2>;
};

export default SectionHeader;
