import React from 'react';

import PropTypes from 'prop-types';
import ChecklistItem from '../ChecklistItem/ChecklistItem';
import Section from '../Section/Section';
import ProgressBar from '../../ProgressBar/ProgressBar';

const Checklist = ({ title, icon }) => {
  return (
    <Section title={title} icon={icon}>
      <ProgressBar percentage={75} />
      <ChecklistItem title="This is a checklist item" />
    </Section>
  );
};

Checklist.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.shape({
    prefix: PropTypes.string,
    iconName: PropTypes.string,
    icon: PropTypes.array,
  }),
};

export default Checklist;
