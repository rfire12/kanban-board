import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Section.scss';
import HiddenTextarea from '../../HiddenTextarea/HiddenTextarea';

const Section = ({ title = '', icon, className, mainHeading, isTitleEditable = true, children }) => {
  const mainHeadingParagraph = mainHeading ? styles.mainHeadingParagraph : '';
  const mainHeadingTextarea = mainHeading ? styles.mainHeadingTextarea : '';

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <FontAwesomeIcon icon={icon} className={styles.cardIcon} />
        <div className={styles.titleWrapper}>
          <HiddenTextarea
            paragraphClassName={`${styles.titleParagraph} ${mainHeadingParagraph}`}
            textareaClassName={`${styles.titleTextarea} ${mainHeadingTextarea}`}
            initialText={title}
            isEditable={isTitleEditable}
          />
        </div>
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
  className: PropTypes.string,
  mainHeading: PropTypes.bool,
  isTitleEditable: PropTypes.bool,
  children: PropTypes.node,
};

export default Section;
