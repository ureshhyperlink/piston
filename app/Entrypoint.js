import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './src/customer/containers/OnBoarding/Splash';
import Tutorial1 from './src/customer/containers/OnBoarding/Tutorial1';
import Tutorial2 from './src/customer/containers/OnBoarding/Tutorial2';
import Tutorial3 from './src/customer/containers/OnBoarding/Tutorial3';
import Tutorial4 from './src/customer/containers/OnBoarding/Tutorial4';
import StartUp from '../app/src/customer/containers/OnBoarding/StartUp';
import SignIn from '../app/src/customer/containers/OnBoarding/SignIn';
import SignUp from '../app/src/customer/containers/OnBoarding/SignUp';
import Verification from '../app/src/customer/containers/OnBoarding/Verification';
import ForgotPass from '../app/src/customer/containers/OnBoarding/ForgotPass';

import NavigationScreen from './src/customer/containers/Dashboard/NavigationScreen';
import Home from './src/customer/containers/Dashboard/Home';
console.disableYellowBox = true;

const App = createStackNavigator({
  Splash: { screen: Splash, navigationOptions: { header: false } },
  Tutorial1: { screen: Tutorial1, navigationOptions: { header: false } },
  Tutorial2: { screen: Tutorial2, navigationOptions: { header: false } },
  Tutorial3: { screen: Tutorial3, navigationOptions: { header: false } },
  Tutorial4: { screen: Tutorial4, navigationOptions: { header: false } },
  StartUp: { screen: StartUp, navigationOptions: { header: false } },
  SignIn: { screen: SignIn, navigationOptions: { header: false } },
  SignUp: { screen: SignUp, navigationOptions: { header: false } },
  Verification: { screen: Verification, navigationOptions: { header: false } },
  ForgotPass: { screen: ForgotPass, navigationOptions: { header: false } },
  
  NavigationScreen: { screen: NavigationScreen, navigationOptions: { header: false } },
  Home: { screen: Home, navigationOptions: { header: false } },

}, {
  initialRouteName: 'Splash',
}
);
export default createAppContainer(App);
