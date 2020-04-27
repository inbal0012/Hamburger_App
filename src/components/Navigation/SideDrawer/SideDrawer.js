import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/auxiliary';

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  console.log(props.open);

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  console.log(attachedClasses);

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
