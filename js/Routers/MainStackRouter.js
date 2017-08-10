/* eslint-disable no-unused-vars */
import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../components/home/';
import BlankPage from '../components/blankPage';
import HomeDrawerRouter from './HomeDrawerRouter';

HomeDrawerRouter.navigationOptions = ({ navigation }) => ({
  header: null,
});

const StackNav = new StackNavigator({
  Home: { screen: Home },
  BlankPage: { screen: BlankPage },
});

export default (StackNav);
