import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import DrawBar from '../components/DrawBar';
import Home from '../components/home/';
import BlankPage2 from '../components/blankPage2';

const DrawNav = new DrawerNavigator(
  {
    Home: { screen: Home },
    BlankPage2: { screen: BlankPage2 },
  },
  {
    contentComponent: props => <DrawBar {...props} />,
  }
);
export default (DrawNav);
