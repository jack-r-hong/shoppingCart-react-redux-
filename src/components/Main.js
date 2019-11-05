import React from 'react';
import DrawerContainer from '../containers/DrawerContainer.js';

const Main = (props) => (
  <div>
    <DrawerContainer />
    <div>
      {props.children}
    </div>
  </div>
);

export default Main;