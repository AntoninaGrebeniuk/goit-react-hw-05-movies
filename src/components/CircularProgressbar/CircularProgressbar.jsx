import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

export const CircularRating = ({ rating }) => {
  return (
    <CircularProgressbar
      value={rating}
      maxValue={10}
      text={rating}
      background
      styles={buildStyles({
        pathColor: rating < 4 ? 'red' : rating < 7 ? 'orange' : 'green',
        height: '100%',
        width: '100%',
        textSize: '38px',
        transition: 'stroke-dashoffset 0.5s ease 0s',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
        pathTransitionDuration: 0.5,
        textColor: '#ffffff',
        trailColor: '#ffffff',
        backgroundColor: '#111111',
      })}
    />
  );
};

CircularRating.propTypes = {
  rating: PropTypes.string,
};
