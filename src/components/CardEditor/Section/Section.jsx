import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Section.scss';

const Section = ({ title = '', icon, children }) => {
  return (
    <section className={styles.section}>
      <div>
        <FontAwesomeIcon icon={icon} className={styles.cardIcon} />
        <h3 className={styles.sectionTitle}>{title}</h3>
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    icon: PropTypes.array,
  }),
  children: PropTypes.node,
};

export default Section;
