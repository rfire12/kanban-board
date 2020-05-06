import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Section.scss';

const Section = ({ title = '', children }) => {
  return (
    <section className={styles.section}>
      <div>
        <FontAwesomeIcon icon={faAlignLeft} className={styles.cardIcon} />
        <h3 className={styles.sectionTitle}>{title}</h3>
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
