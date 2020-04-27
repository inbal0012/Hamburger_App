import React from 'react';

import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    {/*style - used in Toolbar
        in SideDrawer - using a different method (div and a local css class) */}
    <img src={BurgerLogo} alt='MyBurger' />
  </div>
);

export default logo;
