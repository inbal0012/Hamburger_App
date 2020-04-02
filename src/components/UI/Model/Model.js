import React from 'react';

import classes from './Model.css';
import Aux from '../../../hoc/auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const model = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modelClosed} />
    <div
      className={classes.Model}
      style={{
        transform: props.show ? 'transitionY(0)' : 'transitionY(-100vh)',
        display: props.show ? 'inline' : 'none'
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default model;
