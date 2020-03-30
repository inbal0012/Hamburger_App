import React from 'react';

import classes from './Model.css';

const model = props => (
  <div
    className={classes.Model}
    style={{
      transform: props.show ? 'transitionY(0)' : 'transitionY(-100vh)',
      opacity: props.show ? '1' : '0'
    }}
  >
    {props.children}
  </div>
);

export default model;
